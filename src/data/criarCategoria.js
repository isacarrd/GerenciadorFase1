import { produtosTeste } from "./listaProdutosTeste";

let categoriasCriadas = [];

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

  categoriasCriadas.push(nomeCategNova.trim());

  return true;
}

export function getCategoriasUnicas() {
  let allCategories = [];

  produtosTeste.forEach((prod) => {
    allCategories.push(...prod.categProduto);
  });

  allCategories.push(...categoriasCriadas);

  return Array.from(new Set(allCategories));
}