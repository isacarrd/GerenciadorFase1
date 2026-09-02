import editAllowed from "../../assets/edit.svg";
import noEditAllowed from "../../assets/noEditAllowed.svg";
import noImg from "../../assets/noImg.svg";
import { CategoryProduct } from "../ui/CategorySpan";

export default function ProductCard({
  prodImg = "",
  prodNome,
  prodDesc,
  prodCateg,
  prodQuant,
}) {
  if (prodQuant > 0) {
    return (
      <div className="rounded-[15px] overflow-hidden border border-(--verdePrim) w-68.75 lg:w-125 flex flex-col bg-(--branco)">
        <div className="imgArea overflow-hidden flex flex-row items-center justify-center bg-(--verdePrim) w-full h-50 lg:h-90">
          <img
            src={prodImg || noImg}
            alt={prodNome}
            className="object-cover object-center"
          />
        </div>
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
            <div className="categorias flex flex-row gap-1.5 lg:gap-3">
              {prodCateg.map((categ) => (
                <CategoryProduct key={categ} active={true}>
                  {categ}
                </CategoryProduct>
              ))}
            </div>
          </div>
          <span className="font-inter text-(--preto) font-bold text-[10px] lg:text-base">
            ESTOQUE: {String(prodQuant).padStart(2, "0")}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cursor-not-allowed rounded-[15px] overflow-hidden border border-(--noEstoque) w-68.75 lg:w-125 flex flex-col bg-(--branco)">
        <div className="imgArea overflow-hidden flex flex-row items-center justify-center bg-(--noEstoque) w-full h-50 lg:h-90">
          <img
            src={prodImg || noImg}
            alt={prodNome}
            className="object-cover object-center"
          />
        </div>
        <div className="infoProd flex flex-col gap-2.5 px-4 py-4 lg:gap-5 lg:px-6 lg:py-6 ">
          <div className="flex flex-row w-full justify-between items-center">
            <h3 className="font-inter font-bold text-(--noEstoque) text-sm lg:text-2xl">
              {prodNome}
            </h3>
            <button className="editarProduto cursor-not-allowed" disabled>
              <img
                src={noEditAllowed}
                alt="Editar Produto"
                className="w-6 h-6 lg:w-12 lg:h-12"
              />
            </button>
          </div>
          <div className="flex flex-col w-full gap-3 lg:gap-6 items-start">
            <div className="descricao w-full">
              <p className="font-inter break-all text-(--noEstoque) w-full text-xs lg:text-sm ">
                {prodDesc}
              </p>
            </div>
            <div className="categorias flex flex-row gap-1.5 lg:gap-3">
              {prodCateg.map((categ) => (
                <CategoryProduct
                  key={categ}
                  active={false}>
                  {categ}
                </CategoryProduct>
              ))}
            </div>
          </div>
          <span className="font-inter text-(--noEstoque) font-bold text-[10px] lg:text-base">
            ESTOQUE: {String(prodQuant).padStart(2, "0")}
          </span>
        </div>
      </div>
    );
  }
}
