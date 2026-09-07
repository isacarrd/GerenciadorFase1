import { produtosTeste } from "./listaProdutosTeste";

export function selectPesquisa(categSelected) {
  const productsDiv = document.getElementById("products");

  // Evita div vazia/não encontrada
  if (!productsDiv) return;

  // Pega APENAS os ids que começam com 'product-'
  const cards = productsDiv.querySelectorAll("[id^='product-']");

  // Se selecionou o default (Categorias), mostra todos os produtos
  if (categSelected === "Categorias") {
    cards.forEach((card) => {
      card.style.display = "";
    });

    const mensagemAnterior = document.getElementById("mensagemPesquisa");

    if (mensagemAnterior) {
      mensagemAnterior.remove();
    }

    return;
  }

  const produtosFiltrados = produtosTeste.filter((prod) => {
    return prod.categProduto.some((categ) => categ.includes(categSelected))
  })

  // Esconde todos
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Mostra os encontrados
  produtosFiltrados.forEach((prod) => {
    const card = document.getElementById(`product-${prod.id}`);
    if (card) {
      card.style.display = "";
    }
  });

  // Remove mensagem anterior antes de uma pesquisa
  const mensagemAnterior = document.getElementById("mensagemPesquisa");
  if (mensagemAnterior) {
    mensagemAnterior.remove();
  }

  if (produtosFiltrados.length === 0) {
    const mensagem = document.createElement("p");
    mensagem.id = "mensagemPesquisa";
    mensagem.className = "py-5 font-inter text-(--preto) text-sm lg:text-xl text-center w-full";
    mensagem.textContent = "Produto não encontrado, busque por: ID, Nome ou Categoria!";
    productsDiv.appendChild(mensagem);
  }
}