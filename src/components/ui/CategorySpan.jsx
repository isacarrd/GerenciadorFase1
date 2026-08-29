import { useState } from "react";
import selectIco from "../../assets/select.svg";
import { produtosTeste } from "../../data/listaProdutosTeste";

export function CategorySpanMain({ children }) {
  return (
    <span className="font-inter font-bold text-[10px] lg:text-sm text-(--verdePrim) bg-(--branco) rounded-full border-2 border-(--verdePrim) px-1 py-1 lg:px-2 lg:py-2">
      {children}
    </span>
  );
}

export function CategoryProduct({ children, active }) {
  if (active) {
    return (
      <span className="font-inter font-bold text-[10px] lg:text-sm text-(--preto) bg-(--cinza) rounded-full border-2 border-(--cinza) px-1 py-1 lg:px-2 lg:py-2">
        {children}
      </span>
    );
  } else {
    return (
      <span className="font-inter font-bold text-[10px] lg:text-sm text-(--noEstoque) bg-(--cinza) rounded-full border-2 border-(--cinza) cursor-not-allowed px-1 py-1 lg:px-2 lg:py-2">
        {children}
      </span>
    );
  }
}

export function SelectCategory({}) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  function getCategoriasUnicas() {
    let allCategories = [];
    produtosTeste.forEach((prod) => {
      allCategories.push(...prod.categProduto);
    });
    return Array.from(new Set(allCategories));
  }

  const categorias = getCategoriasUnicas();

  // Encontra a maior palavra da lista (incluindo o placeholder) para definir a largura
  const maiorPalavra = [...categorias, "Categoria"].reduce(
    (a, b) => (a.length > b.length ? a : b),
    ""
  );

  return (
    <div className="relative w-fit flex flex-col font-inter text-xs lg:text-sm font-medium">
      {/* botão principal */}
      <div
        onClick={() => setOpen(!open)}
        className={`relative cursor-pointer w-full border border-(--verdeSec) bg-(--branco) text-(--preto) transition-all duration-200 ${
          open ? "rounded-t-[20px] border-b-0" : "rounded-[20px]"
        }`}
      >
        {/* camada invisível que segura a largura máxima o tempo todo */}
        <div className="invisible px-3 py-2 flex flex-row items-center justify-between pointer-events-none">
          <span>{maiorPalavra}</span>
          <img src={selectIco} alt="" className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
        </div>

        {/* preenche o espaço gerado pelo fantasma */}
        <div className="absolute inset-0 px-3 py-2 flex flex-row items-center justify-between w-full">
          <span>{selected ? selected : "Categoria"}</span>
          <img
            src={selectIco}
            alt="Seta"
            className={`w-3 h-3 lg:w-4 lg:h-4 ml-2 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <ul
        className={`scrollbar-thumb-(--branco) scrollbar-track-transparent absolute top-full left-0 w-full z-10 flex flex-col bg-(--verdeSec) text-(--branco) overflow-y-scroll transition-all duration-300 ${
          open
            ? "max-h-60 border border-t-0 border-(--verdeSec) pb-2 opacity-100"
            : "max-h-0 border-0 opacity-0"
        } rounded-b-[20px] shadow-lg`}
      >
        {categorias.map((categ) => {
          return (
            <li
              key={categ}
              className="w-full px-3 py-2 hover:bg-(--verdePrim) cursor-pointer transition-colors whitespace-nowrap"
              onClick={() => {
                setSelected(categ);
                setOpen(false);
              }}
            >
              {categ}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SelectCategoryCreate({ children }) {}
