import { produtosTeste } from "./listaProdutosTeste";

export function barraPesquisa(campo) {
  const productsDiv = document.getElementById("products");

  // Evita div vazia/não encontrada
  if (!productsDiv) return;

  // Pega APENAS os ids que começam com 'product-'
  const cards = productsDiv.querySelectorAll("[id^='product-']");

  // Se a pesquisa estiver vazia, mostra todos novamente e também serve para tirar os espaços em branco no campo
  if (campo.trim() === "") {
    cards.forEach((card) => {
      card.style.display = "";

      // Removendo a mensagem (evitando que ela apareça mesmo após apagar o campo)
      if (mensagemAnterior) {
        mensagemAnterior.remove()
      }
    });
    return;
  }

  const produtosFiltrados = produtosTeste.filter((prod) => {
    const prodId = prod.id.toString() === campo;
    const prodNome = prod.nomeProduto.toLowerCase().includes(campo);
    const prodCateg = prod.categProduto.some((categ) => categ.toLowerCase().includes(campo));

    return prodId || prodNome || prodCateg;
  });

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