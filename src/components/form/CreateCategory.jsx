import { useEffect } from "react";
import { useState } from "react";
import { criarCategoria } from "../../data/criarCategoria";

export default function CreateCategory({ isOpen, onClose }) {
  const [nomeCategNova, setNomeCategNova] = useState("")
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
      <div className="w-56.25 lg:w-112.5 bg-(--branco) flex flex-col rounded-2xl p-3 lg:p-6 gap-2 lg:gap-3.5">
        <h3 className="font-inter text-(--preto) text-sm lg:text-base font-bold">
          Criar nova categoria:
        </h3>
        <div
          id="elementsCreateCategory"
          className="flex flex-col gap-2 lg:gap-3 py-2"
        >
          <div id="nomeCreateCategory" className="flex flex-col gap-1">
            <label
              htmlFor="categName"
              className="font-inter font-medium text-[10px] lg:text-xs"
            >
              Nome da categoria:
            </label>
            <input
              type="text"
              required
              name="categName"
              value={nomeCategNova}
              onChange={e => setNomeCategNova(e.target.value)}
              id="categName"
              className="bg-(--verdeSec) rounded-[5px] px-2.5 lg:px-3 py-2 text-(--branco) font-inter italic text-[10px] lg:text-xs
              placeholder:font-inter placeholder:text-(--branco) placeholder:italic placeholder:text-[10px] placeholder:lg:text-xs focus:outline-none"
              placeholder="Ex: 'Ferramentas'."
            />
          </div>
          <div id="descCreateCategory" className="flex flex-col gap-1">
            <label
              htmlFor="categDesc"
              className="font-inter font-medium text-[10px] lg:text-xs"
            >
              Descrição da categoria:
            </label>
            <input
              type="text"
              name="categDesc"
              id="categDesc"
              className="bg-(--verdeSec) rounded-[5px] px-2.5 lg:px-3 py-2 text-(--branco) font-inter italic text-[10px] lg:text-xs
              placeholder:font-inter placeholder:text-(--branco) placeholder:italic placeholder:text-[10px] placeholder:lg:text-xs focus:outline-none"
              placeholder="Ex: 'Ferramentas para construção'."
            />
          </div>
          <div id="buttonsCreateCategory"
            className="w-full font-inter font-medium text-[10px] lg:text-xs flex flex-row justify-end gap-3 lg:gap-4"
          >
            <button
              type="button"
              id="btnCancelCateg"
              className="cursor-pointer border-2 border-(--error) rounded-[5px] p-3 text-(--error) hover:bg-(--error) hover:text-(--branco)"
              onClick={onClose}
              aria-label="Botão de fechar Modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              id="btnCreateCateg"
              className="cursor-pointer border-2 border-(--verdePrim) rounded-[5px] p-3 text-(--branco) bg-(--verdePrim) hover:text-(--preto)"
              aria-label="Botão de criar Categoria"
              onClick={() => {
                if (criarCategoria({ nomeCategNova })) {
                  setNomeCategNova("");
                  onClose()
                } else {
                  setNomeCategNova("");
                }
              }}
            >
              Criar [teste]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
