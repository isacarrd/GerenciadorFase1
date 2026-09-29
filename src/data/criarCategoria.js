import { produtosTeste } from "./listaProdutosTeste";

let categoriasCriadas = [];
let categoriasRemovidas = [];

const listeners = new Set();

export function subscribeCategorias(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notificar() {
  listeners.forEach((listener) => listener());
}

export function criarCategoria({ nomeCategNova }) {
  let alertMessage = ""
  if (nomeCategNova.trim() == "") {
    alertMessage += "O nome da categoria não pode ficar vazio.\n"
    console.error("Erro na criação de categoria, tente novamente.")
  }

  const categorias = getCategoriasUnicas()

  if (categorias.some((categ) => categ.toLowerCase() === nomeCategNova.trim().toLowerCase())) {
    alertMessage += "Essa categoria já existe.\n";
    console.error("Erro na criação de categoria, tente novamente.")
  }

  if (alertMessage != "") {
    alert(alertMessage);
    return false;
  }

  categoriasRemovidas = categoriasRemovidas.filter(
    (categ) => categ.toLowerCase() !== nomeCategNova.trim().toLowerCase()
  )

  categoriasCriadas.push(nomeCategNova.trim());
  notificar()
  return true;
}

export function deleteCategoria(nomeCategoria) {
  if (!categoriasRemovidas.includes(nomeCategoria)) {
    categoriasRemovidas.push(nomeCategoria);
  }
  categoriasCriadas = categoriasCriadas.filter((categ) => categ !== nomeCategoria);
  notificar();
}

export function getCategoriasUnicas() {
  let allCategories = [];

  produtosTeste.forEach((prod) => {
    allCategories.push(...prod.categProduto);
  });

  allCategories.push(...categoriasCriadas);

  allCategories = allCategories.filter(
    (categ) => !categoriasRemovidas.includes(categ)
  );

  return Array.from(new Set(allCategories));
}

export const CATEGORIA_EXCLUIDA = "Categoria Excluída"

// Retorna uma nova lista de produtos sem as categorias removidas.
// Se o produto ficaria sem nenhuma categoria, recebe o nome genérico.
export function removerCategoriasDosProdutos(produtos, nomesRemovidos) {
  if (nomesRemovidos.length === 0) return produtos;

  return produtos.map((prod) => {
    const afetado = prod.categProduto.some((cat) => nomesRemovidos.includes(cat))
    if (!afetado) return prod; // mantém a referencia

    const restantes = prod.categProduto.filter((cat) => !nomesRemovidos.includes(cat) && cat !== CATEGORIA_EXCLUIDA)

    return {
      ...prod,
      categProduto: restantes.length > 0 ? restantes : [CATEGORIA_EXCLUIDA]
    }
  })
}