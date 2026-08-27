import createElementIco from "../../assets/create.svg";
import { CategoryProduct, CategorySpanMain } from "../ui/CategorySpan";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const produtosTeste = [
    {
      id: 1,
      nomeProduto: "RX9060 XT 16gb",
      descProduto: "Placa de vídeo AMD nível Intermediário",
      imgProduto:
        "https://images5.kabum.com.br/produtos/fotos/779095/placa-de-video-asrock-rx9060xt-cl-16go_1748868930_gg.jpg",
      categProduto: ["Hardware", "GPU", "AMD"],
      quantProduto: 10,
    },
    {
      id: 2,
      nomeProduto: "RTX5060 8gb",
      descProduto: "Placa de vídeo NVIDIA nível Básico",
      imgProduto:
        "https://images1.kabum.com.br/produtos/fotos/1000741/placa-de-video-msi-rtx-5060-shadow-2x-oc-nvidia-geforce-8gb-gddr7-128-bit-912-v537-038_1771333499_gg.jpg",
      categProduto: ["Hardware", "GPU", "NVIDIA"],
      quantProduto: 0,
    },
    {
      id: 3,
      nomeProduto: "Blusa do Brasil",
      descProduto: "FIFA 2026",
      imgProduto:
        "https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2026/03/nova-camisa-oficial-selecao-2026-vinijr.jpg",
      categProduto: ["Roupa", "Esporte"],
      quantProduto: 0,
    },
    {
      id: 4,
      nomeProduto: "Copo de plástico",
      descProduto: "Copo preto de plástico fosco.",
      imgProduto:
        "https://http2.mlstatic.com/D_NQ_NP_2X_748888-MLB89576682471_082025-F-kit-50-copos-ecologico-lisos-pp-400ml-varias-cores-festas.webp",
      categProduto: ["Casa"],
      quantProduto: 0,
    },
  ];
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
            <CategoryProduct active={true}>Categoria tiva</CategoryProduct>
            <CategoryProduct active={false}>
              Categoria desativada
            </CategoryProduct>
          </div>
        </div>
        <button
          id="createProduct"
          className="w-fit h-fit font-inter text-(--branco) bg-(--marrom) rounded-full px-3 py-3 lg:px-6 lg:py-6 cursor-pointer"
        >
          <img
            src={createElementIco}
            alt="Create Product"
            className="w-4 h-4 lg:w-12 lg:h-12"
          />
        </button>
      </div>
      <div className="products w-full h-fit flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row lg:gap-y-10.5">
        {produtosTeste.map((prod) => (
          <ProductCard
            key={prod.id}
            prodImg={prod.imgProduto}
            prodNome={prod.nomeProduto}
            prodCateg={prod.categProduto.map((categ) => categ)}
            prodDesc={prod.descProduto}
            prodQuant={prod.quantProduto}
          />
        ))}
      </div>
    </section>
  );
}
