import { useEffect, useState } from "react";
import required from "../../assets/required.svg";
import uploadIcon from "../../assets/upload.svg";
import { readImage } from "../../data/readImage";
import { useCharCounter } from "../../data/useCharCounter";
import { validarCampos } from "../../data/validacaoSimples";

import { BtnDelete } from "../ui/BotaoDeletar";
import CategoryCamp from "./CategoryCamp";

export default function EditProduct({
  id,
  isOpen,
  onClose,
  produtos,
  setProdutos,
}) {
  const [prodImgNova, setProdImgNova] = useState(null);
  const [prodNomeNova, setProdNomeNova] = useState("");
  const [prodDescNova, setProdDescNova] = useState("");
  const [prodCategNova, setProdCategNova] = useState([]); // Será retornado um array, exemplo ['CPU', 'Computadores', 'Hardware'] onde uso o select
  const [prodQuantNova, setProdQuantNova] = useState("");

  // Contadores para cada campo específico
  const nomeCounter = useCharCounter(prodNomeNova, setProdNomeNova, 50);
  const descCounter = useCharCounter(prodDescNova, setProdDescNova, 200);
  const categCounter = useCharCounter(prodCategNova, setProdCategNova, 5);

  // Popula os campos com os dados atuais do produto quando o modal abre
  useEffect(() => {
    const produtoAtual = produtos.find((p) => p.id === id);
    if (produtoAtual) {
      setProdNomeNova(produtoAtual.nomeProduto);
      setProdDescNova(produtoAtual.descProduto);
      setProdCategNova(produtoAtual.categProduto);
      setProdQuantNova(String(produtoAtual.quantProduto));
      setProdImgNova(produtoAtual.imgProduto); // popula a prévia com a imagem já existente
    }
  }, [id]); // roda quando o modal abre para esse id específico

  const handleImagemSelecionada = async (e) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;
    const dataUrl = await readImage(arquivo);
    setProdImgNova(dataUrl);
  };

  const handleSalvar = async () => {
    const valido = validarCampos(
      prodNomeNova,
      prodDescNova,
      prodCategNova,
      prodQuantNova
    );
    if (!valido) return;

    const alteracoes = {};
    if (prodNomeNova.trim() !== "") alteracoes.nomeProduto = prodNomeNova;
    if (prodDescNova.trim() !== "") alteracoes.descProduto = prodDescNova;
    if (prodCategNova.length > 0) alteracoes.categProduto = prodCategNova;
    if (prodQuantNova !== "") alteracoes.quantProduto = Number(prodQuantNova);
    alteracoes.imgProduto = prodImgNova; // sempre atualiza (seja a antiga ou a nova selecionada)

    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...alteracoes } : p))
    );

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="w-screen h-dvh fixed top-0 left-0 z-9999 flex items-center justify-center bg-black/50">
      <div
        className="scrollbar-thumb-(--verdeSec) scrollbar-track-transparent 
      w-75 lg:w-2xl 
      bg-(--branco) h-fit 
      max-h-[95vh] overflow-y-auto flex flex-col items-start px-6 py-6 gap-6 lg:gap-8 rounded-[10px] lg:rounded-2xl"
      >
        <h2 className="break-all font-inter font-bold text-(--preto) text-2xl lg:text-[32px]">
          {`PRODUTO #${String(id).padStart(2, "0")}`}
        </h2>
        <div id="elements" className="w-full flex flex-col gap-2.5 lg:gap-5">
          {/* Imagem */}
          <div className="imagem flex flex-col gap-2">
            <label
              htmlFor="imgProduto"
              className="font-inter font-bold text-sm lg:text-xl"
            >
              Imagem
            </label>
            <label
              htmlFor="imgProduto"
              className=" w-full h-50 lg:h-90 bg-(--verdePrim) flex items-center justify-center cursor-pointer"
            >
              {prodImgNova ? (
                <img
                  src={prodImgNova}
                  alt="Prévia da imagem"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={uploadIcon}
                  alt="Upload Imagem"
                  className="w-6 h-6 lg:w-12 lg:h-12"
                />
              )}
            </label>
            <input
              id="imgProduto"
              type="file"
              onChange={handleImagemSelecionada}
              accept="image/*"
              className="hidden"
            />
          </div>
          {/* Nome */}
          <div className="nome w-full flex flex-col gap-1 lg:gap-2">
            <span className="flex flex-row items-center justify-between flex-wrap">
              <label
                htmlFor="nomeProduto"
                className="font-inter font-bold text-sm lg:text-xl flex justify-start"
              >
                Nome
                <img
                  src={required}
                  alt="Required Warning"
                  className="w-3 h-3 lg:w-4 lg:h-4"
                />
              </label>
              <span className="font-inter font-medium text-(--noEstoque) text-sm lg:text-xl">
                {nomeCounter.remaining}/{nomeCounter.limit}
              </span>
            </span>
            <input
              type="text"
              id="nomeProduto"
              name="nomeProduto"
              value={prodNomeNova}
              required
              maxLength={nomeCounter.limit}
              onChange={nomeCounter.handleChange}
              placeholder="Nome do Produto"
              className="font-inter text-sm focus:outline-none w-full px-2 py-2 bg-(--cinza) text-(--preto) rounded-lg placeholder:font-inter
              placeholder:text-(--preto) placeholder:text-sm lg:placeholder:text-xl lg:rounded-2xl lg:text-xl lg:px-4 lg:py-4"
            />
          </div>
          {/* Descrição */}
          <div className="descricao w-full flex flex-col gap-1 lg:gap-2">
            <span className="flex flex-row items-center justify-between flex-wrap">
              <label
                htmlFor="descProduto"
                className="font-inter font-bold text-sm lg:text-xl flex justify-start"
              >
                Descrição
                <img
                  src={required}
                  alt="Required Warning"
                  className="w-3 h-3 lg:w-4 lg:h-4"
                />
              </label>
              <span className="font-inter font-medium text-(--noEstoque) text-sm lg:text-xl">
                {descCounter.remaining}/{descCounter.limit}
              </span>
            </span>
            <textarea
              type="text"
              id="descProduto"
              name="descProduto"
              value={prodDescNova}
              required
              maxLength={descCounter.limit}
              onChange={descCounter.handleChange}
              placeholder="Descrição do Produto"
              className="font-inter text-sm focus:outline-none w-full px-2 py-2 bg-(--cinza) text-(--preto) rounded-lg placeholder:font-inter
              placeholder:text-(--preto) placeholder:text-sm  scrollbar-thumb-red-50 lg:placeholder:text-xl lg:rounded-2xl lg:text-xl lg:px-4 lg:py-4"
            />
          </div>
          <CategoryCamp categorias={prodCategNova} counter={categCounter} />
          {/* Estoque/Quantidade */}
          <div className="quantidade w-full flex flex-row items-center gap-1 lg:gap-2">
            <label
              htmlFor="quantProduto"
              className="font-inter font-bold text-sm lg:text-xl flex justify-start"
            >
              Estoque:
            </label>
            <div className="flex flex-row gap-0.5">
              <input
                type="number"
                id="quantProduto"
                name="quantProduto"
                value={prodQuantNova}
                required
                onChange={(e) => setProdQuantNova(e.target.value)}
                placeholder="00"
                className="w-14 lg:w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-inter text-sm lg:text-xl px-2 py-2 lg:px-4 lg:py-4 bg-(--cinza) text-(--preto) rounded-lg lg:rounded-2xl placeholder:font-inter placeholder:text-(--preto) placeholder:text-sm lg:placeholder:text-xl focus:outline-none"
              />
              <img
                src={required}
                alt="Required Warning"
                className="w-3 h-3 lg:w-4 lg:h-4"
              />
            </div>
          </div>
        </div>
        {/* Botões: Cancelar | Criar */}
        <div
          id="alteracoes"
          className="w-full font-inter font-medium text-xs lg:text-base flex justify-between items-center"
        >
          <BtnDelete
            onDelete={() =>
              setProdutos((prev) => prev.filter((p) => p.id !== id))
            }
          />
          <div className=" flex justify-end gap-3 lg:gap-4 items-center">
            <button
              id="btnCancelEdit"
              type="button"
              className="cursor-pointer border-2 border-(--error) rounded-[5px] p-3 text-(--error) hover:bg-(--error) hover:text-(--branco)"
              onClick={onClose}
              aria-label="Botão de fechar Modal"
            >
              Cancelar
            </button>
            <button
              id="btnEdit"
              type="button"
              className="cursor-pointer border-2 border-(--verdePrim) rounded-[5px] p-3 text-(--branco) bg-(--verdePrim) hover:text-(--preto)"
              onClick={handleSalvar}
              aria-label="Botão de salvar Alteração de Produto"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
