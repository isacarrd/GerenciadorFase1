import { useState } from "react";
import createElementIco from "../../assets/create.svg";
import { SelectCategory, CategorySpanMain } from "../ui/CategorySpan";
import ProductCard from "../form/ProductCard";
import CreateProduct from "../form/CreateProduct";
import CreateCategory from "../form/CreateCategory";
import { produtosTeste } from "../../data/listaProdutosTeste";
import { selectPesquisa } from "../../data/selectPesquisa"; 

export default function ProductSection() {
  const [modalCriar, setModalCriarAtivo] = useState(null);
  const [modalCriarCateg, setModalCriarCategAtivo] = useState(null);
  const [categSelected, setCategSelected] = useState("Categorias")

    const handleClose = () => {
      setModalCriarAtivo(null);
  };
    const handleCloseCateg = () => {
      setModalCriarCategAtivo(null);
  };
  
  return (
    <section className="w-full flex flex-col gap-3 lg:gap-10">
      <div className="w-full flex flex-row items-center justify-between">
        <div id="aboutProduct" className="flex flex-col w-fit gap-2 lg:gap-4">
          <h4 className="text-(--preto) text-xs lg:text-base font-bold font-inter">
            Produtos:
          </h4>
          <div
            id="categories"
            className="w-fit flex flex-row flex-wrap gap-3 lg:gap-2"
          >
            <SelectCategory
              onChange={(categ) => {
                selectPesquisa(categ);
                setCategSelected(categ);
              }}
            />
            <button
              onClick={() => setModalCriarCategAtivo(true)}
              className="cursor-pointer font-inter font-bold text-[10px] lg:text-sm text-(--verdeSec) bg-(--branco) rounded-full border border-(--verdeSec) px-1 py-1 lg:px-2 lg:py-2 hover:text-(--preto) hover:border-(--preto)"
            >
              Criar Categoria
            </button>
          </div>
        </div>
        <button
          id="createProduct"
          className="w-fit h-fit font-inter text-(--branco) bg-(--marrom) rounded-full px-3 py-3 lg:px-6 lg:py-6 cursor-pointer"
          onClick={() => setModalCriarAtivo(true)}
        >
          <img
            src={createElementIco}
            alt="Create Product"
            className="w-4 h-4 lg:w-12 lg:h-12"
          />
        </button>
      </div>
      <div
        id="products"
        className="w-full h-fit flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row lg:gap-y-10.5"
      >
        {produtosTeste.map((prod) => (
          <ProductCard
            key={prod.id}
            prodId={prod.id}
            prodImg={prod.imgProduto}
            prodNome={prod.nomeProduto}
            prodCateg={prod.categProduto}
            prodDesc={prod.descProduto}
            prodQuant={prod.quantProduto}
          />
        ))}
        {modalCriar && <CreateProduct isOpen={true} onClose={handleClose} />}
        {modalCriarCateg && <CreateCategory isOpen={true} onClose={handleCloseCateg} />}
      </div>
    </section>
  );
}
