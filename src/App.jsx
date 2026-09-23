import "./index.css";
import { useState } from "react";
import Header from "./components/ui/Header";
import ProductSection from "./components/screen/ProductSection";
import SearchSection from "./components/screen/SearchSection";
import { produtosTeste } from "./data/listaProdutosTeste";

export default function App() {
  const [produtos, setProdutos] = useState(produtosTeste)
  
  return (
    <div className="h-lvh bg-(--bgColor)">
      <Header />
      <main className="flex flex-col px-6 py-12 gap-12 lg:px-25 lg:py-14 lg:gap-30">
        <SearchSection produtos={produtos} />
        <ProductSection produtos={produtos} setProdutos={setProdutos} />
      </main>
    </div>
  );
}
