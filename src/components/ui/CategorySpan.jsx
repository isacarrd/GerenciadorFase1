import { useState } from "react";
import { produtosTeste } from "../../data/listaProdutosTeste";
import selectIco from "../../assets/select.svg";
import removeIco from "../../assets/removeBlack.svg"

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

export function SelectCategoryCreate({ index, valorAtual, todasSelecionadas, onRemove, onSelect }) {
  const [open, setOpen] = useState(false);

  function getCategoriasUnicas() {
    let allCategories = [];
    produtosTeste.forEach((prod) => {
      allCategories.push(...prod.categProduto);
    });
    return Array.from(new Set(allCategories));
  }

  const allCategories = getCategoriasUnicas();

  // Remove as que já estão no array do pai, EXCETO a que está selecionada neste exato campo
  const categoriasDisponiveis = allCategories.filter((categ) => !todasSelecionadas.includes(categ) || categ === valorAtual)

  // Encontra a maior palavra da lista (incluindo o placeholder) para definir a largura
  const maiorPalavra = [...allCategories, "Categoria"].reduce(
    (a, b) => (a.length > b.length ? a : b),
    ""
  );

  return (
    <div className="relative w-fit flex flex-col font-inter text-xs lg:text-sm font-medium">
      {/* Botão principal */}
      <div
        onClick={() => setOpen(!open)}
        className={`relative cursor-pointer w-full border border-(--verdeSec) bg-(--branco) text-(--preto) transition-all duration-200 ${
          open ? "rounded-t-[20px] border-b-0" : "rounded-[20px]"
        }`}
      >
        {/* camada invisível que segura a largura máxima o tempo todo */}
        <div className="invisible lg:px-3 lg:py-2 px-1.5 py-1  flex flex-row items-center w-full gap-1 lg:gap-2 pointer-events-none">
          {/* Espaço da Esquerda */}
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <img src={removeIco} alt="" className="w-full h-full" />
          </div>

          {/* centro dinâmico */}
          <span className="flex-1 text-center whitespace-nowrap">
            {maiorPalavra}
          </span>

          {/* espaço da direita */}
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <img src={selectIco} alt="" className="w-3 h-3 lg:w-4 lg:h-4" />
          </div>
        </div>

        {/* preenche o espaço gerado pelo fantasma */}
        <div className="absolute inset-0 lg:px-3 lg:py-2 px-1.5 py-1 flex flex-row items-center w-full gap-1 lg:gap-2">
          {/* Esquerda: Botão Limpar */}
          <button
            className="w-5 h-5 shrink-0 flex items-center justify-center hover:bg-(--cinza) rounded-full cursor-pointer z-10"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(index);
            }}
          >
            <img
              src={removeIco}
              alt="Remover"
              className="w-3 h-3 lg:w-4 lg:h-4"
            />
          </button>

          {/* Texto Selecionado -> Agora ele usa o valor recebido do componente pai */}
          <span className="flex-1 text-center whitespace-nowrap">
            {valorAtual ? valorAtual : "Categoria"}
          </span>

          {/* Direita: Seta */}
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <img
              src={selectIco}
              alt="Seta"
              className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Lista Suspensa */}
      <ul
        className={`scrollbar-thumb-(--branco) scrollbar-track-transparent absolute top-full left-0 w-full z-10 flex flex-col bg-(--verdeSec) text-(--branco) overflow-y-auto transition-all duration-300 ${
          open
            ? "max-h-60 border border-t-0 border-(--verdeSec) pb-2 opacity-100"
            : "max-h-0 border-0 opacity-0"
        } rounded-b-[20px] shadow-lg`}
      >
        {categoriasDisponiveis.map((categ) => {
          return (
            <li
              key={categ}
              className={`w-full px-3 py-2 text-left hover:bg-(--verdePrim) cursor-pointer transition-colors whitespace-nowrap ${
                categ === valorAtual ? "bg-(--verdePrim)" : ""
              }`}
              onClick={() => {
                onSelect(index, categ);
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
