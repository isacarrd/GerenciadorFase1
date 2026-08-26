import editAllowed from "../../assets/edit.svg";
import { CategoryProduct } from "../ui/CategorySpan";

export default function ProductCard({
  prodNome,
  prodDesc,
  prodCateg,
  prodQuant,
}) {
  return (
    <div className="rounded-[15px] overflow-hidden border border-(--verdePrim) w-68.75 lg:w-125 flex flex-col bg-(--branco)">
      {/* <img src={prodImage} alt="Imagem Produto" className="bg-(--verdePrim) w-full" /> */}
      <div id="teste" className="bg-(--verdePrim) w-full h-40 lg:h-62.5"></div>
      <div className="infoProd flex flex-col gap-2.5 px-4 py-4 lg:gap-5 lg:px-6 lg:py-6 ">
        <div className="flex flex-row w-full justify-between items-center">
          <h3 className="font-inter font-bold text-(--preto) text-sm lg:text-2xl">
            {prodNome}
          </h3>
          <button className="editarProduto cursor-pointer">
            <img
              src={editAllowed}
              alt="Editar Produto"
              className="w-6 h-6 lg:w-12 lg:h-12"
            />
          </button>
        </div>
        <div className="flex flex-col w-full gap-3 lg:gap-6 items-start">
          <div className="descricao w-full">
            <p className="font-inter break-all text-(--preto) w-full text-xs lg:text-sm ">
              {prodDesc}
            </p>
          </div>
          <CategoryProduct active={true}>{prodCateg}</CategoryProduct>
        </div>
        <span
          className="font-inter font-bold text-[10px] lg:text-base"
        >
          ESTOQUE: {prodQuant}
        </span>
      </div>
    </div>
  );
}
