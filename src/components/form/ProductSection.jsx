import { CategorySpanMain } from "../ui/CategorySpan";
import createElementIco from '../../assets/create.svg'

export default function ProductSection() {
  return (
    <section className="w-full flex flex-col gap-3 lg:gap-10">
      <div className="w-full flex flex-row items-center justify-between">
        <div id="aboutProduct" className="flex flex-col w-fit gap-3 lg:gap-10">
          <h4 className="text-(--preto) text-xs lg:text-base font-bold font-inter">
            Produtos:
          </h4>
          <div
            id="categories"
            className="w-fit flex flex-row flex-wrap gap-3 lg:gap-2"
          >
            <CategorySpanMain>Categoria</CategorySpanMain>
            <CategorySpanMain>Categoria</CategorySpanMain>
            <CategorySpanMain>Categoria</CategorySpanMain>
          </div>
        </div>
        <button id="createProduct"
          className="w-fit h-fit font-inter text-(--branco) bg-(--marrom) rounded-full px-3 py-3 lg:px-6 lg:py-6 cursor-pointer"
        >
          <img
            src={createElementIco}
            alt="Create Product"
            className="w-4 h-4 lg:w-12 lg:h-12"
          />
        </button>
      </div>
      <div id="products" className="w-full flex flex-row flex-wrap justify-between">
        <p>oii</p>
      </div>
    </section>
  );
}
