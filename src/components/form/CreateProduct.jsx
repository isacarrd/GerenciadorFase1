import uploadIcon from '../../assets/upload.svg'
import required from '../../assets/required.svg'
import { useEffect } from "react";

export default function CreateProduct({ isOpen, onClose }) {
  if (!isOpen) return null;

  // função de acessibilidade
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
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
    <div className="min-w-68.75 max-w-270 bg-(--branco) h-fit flex flex-col items-star px-6 py-6 gap-6 lg:gap-8 rounded-[10px] lg:rounded-2xl">
      <h2 className="break-all font-inter font-bold text-(--preto) text-2xl lg:text-[32px]">
        NOVO PRODUTO
      </h2>
      <div className="elements w-full flex flex-col gap-2.5 lg:gap-5">
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
            accept="image/*"
            className="hidden"
          />
        </div>
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
              0/50
            </span>
          </span>
          <input
            required
            type="text"
            name="nomeProduto"
            id="nomeProduto"
            placeholder="Nome do Produto"
            className="font-inter text-sm focus:outline-none w-full px-2 py-2 bg-(--cinza) text-(--preto) rounded-lg placeholder:font-inter
            placeholder:text-(--preto) placeholder:text-sm lg:placeholder:text-xl lg:rounded-2xl lg:text-xl lg:px-4 lg:py-4"
          />
        </div>
      </div>
    </div>
  );
}
