import "./index.css";
import Header from "./components/ui/Header";
import SearchBar from "./components/form/SearchBar";

export default function App() {
  return (
    <div className="bg-(--bgColor)">
      <Header />
      <main className="flex flex-col px-6 py-12 gap-12 lg:px-25 lg:py-14 lg:gap-30">
        <SearchBar/>
      </main>
    </div>
  );
}
