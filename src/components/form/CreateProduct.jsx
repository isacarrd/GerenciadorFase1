import { useEffect, useState } from "react";
import required from "../../assets/required.svg";
import uploadIcon from "../../assets/upload.svg";
import { useCharCounter } from "../../data/useCharCounter";
import { validarCampos } from "../../data/validacaoSimples";

import CategoryCamp from "./CategoryCamp";

export default function CreateProduct({ isOpen, onClose }) {
  const [prodImg, setProdImg] = useState("")
  const [prodNome, setProdNome] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodCateg, setProdCateg] = useState([]); // Será retornado um array, exemplo ['CPU', 'Computadores', 'Hardware'] onde uso o select
  const [prodQuant, setProdQuant] = useState("");

  // Contadores para cada campo específico
  const nomeCounter = useCharCounter(prodNome, setProdNome, 50);
  const descCounter = useCharCounter(prodDesc, setProdDesc, 200);
  const categCounter = useCharCounter(prodCateg, setProdCateg, 5);

  const handleValidarCampos = () => {
    validarCampos(prodNome, prodDesc, prodCateg, prodQuant);
    setProdImg("");
    setProdNome("");
    setProdDesc("");
    setProdCateg([]);
    setProdQuant("");
  };

  // função de acessibilidade
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      
    };
    
    // só add o listener se o modal estiver aberto
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    
    // remove o listener quando o modal fechar ou desmontar
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null; 

  return (
    <div className="w-screen h-svh fixed top-0 left-0 z-9999 flex items-center justify-center bg-black/50">
      <div className=" scrollbar-thumb-(--verdeSec) scrollbar-track-transparent min-w-68.75 max-w-270 bg-(--branco) h-fit max-h-[95vh] overflow-y-auto flex flex-col items-start px-6 py-6 gap-6 lg:gap-8 rounded-[10px] lg:rounded-2xl">
        <h2 className="break-all font-inter font-bold text-(--preto) text-2xl lg:text-[32px]">
          NOVO PRODUTO
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
              <img
                src={uploadIcon}
                alt="Upload Imagem"
                className="w-6 h-6 lg:w-12 lg:h-12"
              />
            </label>
            <input
              id="imgProduto"
              type="file"
              value={prodImg}
              onChange={setProdImg}
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
              value={prodNome}
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
              value={prodDesc}
              required
              maxLength={descCounter.limit}
              onChange={descCounter.handleChange}
              placeholder="Descrição do Produto"
              className="font-inter text-sm focus:outline-none w-full px-2 py-2 bg-(--cinza) text-(--preto) rounded-lg placeholder:font-inter
              placeholder:text-(--preto) placeholder:text-sm  scrollbar-thumb-red-50 lg:placeholder:text-xl lg:rounded-2xl lg:text-xl lg:px-4 lg:py-4"
            />
          </div>
          <CategoryCamp categorias={prodCateg} counter={categCounter} />
          {/* Estoque/Quantidade */}
          <div className="quantidade w-full flex flex-row items-center gap-1 lg:gap-2">
            <label
              htmlFor="quantProduto"
              className="font-inter font-bold text-sm lg:text-xl flex justify-start"
            >
              Estoque:
            </label>
            <div className="w-fit flex flex-row gap-0.5">
              <input
                type="number"
                id="quantProduto"
                name="quantProduto"
                value={prodQuant}
                required
                onChange={(e) => setProdQuant(e.target.value)}
                placeholder="00"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-min-[50px] lg:w-min-[57px] font-inter text-sm lg:text-xl px-2 py-2 lg:px-4 lg:py-4 bg-(--cinza) text-(--preto) rounded-lg lg:rounded-2xl placeholder:font-inter placeholder:text-(--preto) placeholder:text-sm lg:placeholder:text-xl focus:outline-none"
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
          className="w-full font-inter font-medium text-xs lg:text-base flex flex-row justify-end gap-3 lg:gap-4"
        >
          <button
            type="button"
            id="btnCancel"
            className="cursor-pointer border-2 border-(--error) rounded-[5px] p-3 text-(--error) hover:bg-(--error) hover:text-(--branco)"
            onClick={onClose}
            aria-label="Botão de fechar Modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            id="btnCreate"
            className="cursor-pointer border-2 border-(--verdePrim) rounded-[5px] p-3 text-(--branco) bg-(--verdePrim) hover:text-(--preto)"
            onClick={handleValidarCampos}
            aria-label="Botão de criar Produto"
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
