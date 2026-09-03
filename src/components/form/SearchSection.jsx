import searchLupa from "../../assets/search.svg";
import { barraPesquisa } from "../../data/barraPesquisa";

export default function SearchSection() {
  return (
    <section className="flex justify-center flex-row px-6 lg:px-25">
      <div
        className="
          w-full
          flex flex-row items-center
          rounded-[100px]
          gap-3
          bg-(--searchBar)
          border-2 border-(--searchBarEffect)
          inset-shadow-[0_0_10px_var(--searchBarEffect)]
          has-[input:focus]:border-(--marrom)
          px-6 py-4.5
          lg:px-12 lg:py-5 lg:gap-5"
      >
        <img
          src={searchLupa}
          alt="Elemento de decoração"
          className="w-5 lg:w-12"
        />
        <input
          aria-label="Barra de pesquisa"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="placeholder de teste"
          onChange={(e) => barraPesquisa(e.target.value.toLowerCase())}
          className="
            w-full
            font-inter
            text-sm lg:text-xl
            bg-transparent
            focus:outline-none
            text-(--branco)
            placeholder:font-inter
            placeholder:text-(--bgColor)"
        />
      </div>
    </section>
  );
}
