import required from "../../assets/required.svg";
import addCategory from "../../assets/create.svg";

export default function CategoryCamp({ categorias, counter }) {
  // Função simulando a seleção de uma nova categoria no Select
  const onSelectCategoria = (novaCategoria) => {
    // Evita adicionar se o limite já foi atingido ou se a categoria já existe
    if (counter.remaining > 0 && !categorias.includes(novaCategoria)) {
      const novoArray = [...categorias, novaCategoria];
      counter.handleArrayChange(novoArray);
    }
  };

  const removerCategoria = (catRemovida) => {
    const novoArray = categorias.filter((cat) => cat !== catRemovida);
    counter.handleArrayChange(novoArray);
  };

  return (
    <div className="categorias w-full flex flex-col gap-1 lg:gap-2">
      <span className="flex flex-row items-center justify-between flex-wrap">
        <label
          htmlFor="categProduto"
          className="font-inter font-bold text-sm lg:text-xl flex justify-start"
        >
          Categoria(s)
          <img
            src={required}
            alt="Required Warning"
            className="w-3 h-3 lg:w-4 lg:h-4"
          />
        </label>

        <span className="font-inter font-medium text-(--noEstoque) text-sm lg:text-xl">
          {counter.remaining}/{counter.limit}
        </span>
      </span>

      <div className="w-full flex flex-row items-center px-2 py-2 gap-2 lg:px-4 lg:py-4 bg-(--cinza) rounded-lg lg:rounded-2xl">
        {/* Botão de Adicionar (+) */}
        <button
          onClick={() => onSelectCategoria("Nova Categoria Teste")}
          disabled={counter.remaining === 0}
          className="cursor-pointer bg-(--verdePrim) w-8 h-8 lg:w-14 lg:h-14 rounded-[10px] lg:rounded-[15px] flex items-center justify-center disabled:bg-(--noEstoque)"
        >
          <img
            src={addCategory}
            alt="Adicionar Categoria"
            className="w-3 h-3 lg:w-6 lg:h-6"
          />
        </button>

        {/* Tags de Categorias Adicionadas */}
        {categorias.length === 0 ? (
          <span className="font-inter text-(--error) font-medium text-[10px] lg:text-xs ">
            Não pode ficar vazio, por favor selecione uma categoria.
          </span>
        ) : (
          categorias.map((cat, index) => (
            <span
              key={index}
              className="bg-gray-300 px-3 py-1 rounded-full text-sm flex gap-2"
            >
              {cat}
              <button onClick={() => removerCategoria(cat)}>x</button>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
