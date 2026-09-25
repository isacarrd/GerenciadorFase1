import { useEffect, useState } from "react";
import exitIco from "../../assets/removeBlack.svg";
import { getCategoriasUnicas } from "../../data/criarCategoria";
import { BtnDeleteManage } from "../ui/BotaoDeletar";
import CreateCategory from "./CreateCategory";

export default function ManageCategory({ isOpen, onClose }) {
  const [abrirModalCreateCateg, setAbrirModalCreateCateg] = useState(null)
  const handleCloseModalCreateCateg = () => {
    setAbrirModalCreateCateg(null)
  }

  const categorias = getCategoriasUnicas();
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
    <div className="w-screen h-dvh fixed top-0 left-0 z-9999 flex items-center justify-center bg-black/50">
      <div className="overflow-y-auto scrollbar-thumb-(--verdeSec) scrollbar-track-transparent max-h-125 w-56.25 lg:w-112.5 bg-(--branco) flex flex-col rounded-2xl p-3.5 lg:p-6 gap-3.5 lg:gap-6">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-inter font-bold text-xs lg:text-base text-(--preto)">
            Gerenciador de Categorias
          </h3>
          <button
            type="button"
            className="cursor-pointer p-1 lg:p-2"
            onClick={onClose}
            aria-label="Botão de fechar modal"
          >
            <img src={exitIco} alt="Fechar modal" />
          </button>
        </div>
        <div className="flex flex-col gap-1.75 lg:gap-3.5">
          {/* Categorias */}
          <ul className="flex flex-col gap-2.25 p-3 lg:gap-4.5 bg-(--cinza) rounded-[5px]">
            {categorias.map((categ) => (
              <li className="categItem flex flex-row flex-wrap px-0.5 py-0.5 justify-between items-center lg:py-1 font-inter font-medium text-xs lg:text-sm text-(--preto) hover:bg-[#C9C9C9] rounded-[5px]">
                {categ}
                <BtnDeleteManage />
              </li>
            ))}
          </ul>

          {/* Botões */}
          <div className="font-inter font-medium text-xs lg:text-base flex flex-row flex-wrap justify-between gap-y-1.75 lg:gap-y-3.5">
            <button
              type="button"
              aria-label="Botão de criar nova categoria"
              className="cursor-pointer border-2 border-(--marrom) bg-(--marrom) rounded-[5px] p-3 text-(--branco) hover:bg-(--branco) hover:text-(--marrom)"
              onClick={setAbrirModalCreateCateg}
            >
              Criar nova categoria
            </button>
            <button
              type="button"
              id="newAlterationsCategory"
              aria-label="Botão de salvar alterações nas categorias"
              className="cursor-pointer border-2 border-(--verdePrim) rounded-[5px] p-3 text-(--branco) bg-(--verdePrim) hover:text-(--preto)"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
      {abrirModalCreateCateg && (
        <CreateCategory isOpen={true} onClose={handleCloseModalCreateCateg} />
      )}
    </div>
  );
}
