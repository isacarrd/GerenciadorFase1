import "./index.css";
import Header from "./components/ui/Header";
import SearchSection from "./components/form/SearchSection";
import ProductSection from "./components/form/ProductSection";
import EditProduct from "./components/form/EditProduct";

export default function App() {
  return (
    <div className="h-lvh bg-(--bgColor)">
      <Header />
      <main className="flex flex-col px-6 py-12 gap-12 lg:px-25 lg:py-14 lg:gap-30">
        <SearchSection />
        <ProductSection />
      </main>
    </div>
  );
}
