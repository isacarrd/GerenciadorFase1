import { useState } from "react";
import addCategory from "../../assets/create.svg";
import required from "../../assets/required.svg";
import { SelectCategoryCreate } from "../ui/CategorySpan";
import CreateCategory from "./CreateCategory";

export default function CategoryCamp({ categorias, counter }) {
  const [modalCriar, setModalCriarAtivo] = useState(null);
  const handleClose = () => {
    setModalCriarAtivo(null);
  };

  // Adiciona um "slot" vazio para um novo Select
  const adicionarCampo = () => {
    if (counter.remaining > 0) {
      const novoArray = [...categorias, ""];
      counter.handleArrayChange(novoArray);
    }
  };

  // Remove a categoria baseada no index dela no array
  const removerCategoria = (indexParaRemover) => {
    const novoArray = categorias.filter(
      (_, index) => index !== indexParaRemover
    );
    counter.handleArrayChange(novoArray);
  };

  // Atualiza o valor de uma categoria específica quando o usuário escolhe no Select
  const atualizarCategoria = (indexAtualizado, novoValor) => {
    const novoArray = [...categorias];
    novoArray[indexAtualizado] = novoValor;
    counter.handleArrayChange(novoArray);
  };

  return (
    <div className="categorias flex flex-col gap-1 lg:gap-2">
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

      <div className="w-full h-fit flex-wrap flex flex-row items-center px-2 py-2 gap-2 lg:px-4 lg:py-4 bg-(--cinza) rounded-lg lg:rounded-2xl">
        {/* Botão de Adicionar (+) */}
        <div className="flex flex-col gap-2">
          <button
            onClick={adicionarCampo}
            disabled={counter.remaining === 0}
            className="cursor-pointer bg-(--verdePrim) w-8 h-8 lg:w-14 lg:h-14 rounded-[10px] lg:rounded-[15px] flex items-center justify-center disabled:bg-(--noEstoque)"
          >
            <img
              src={addCategory}
              alt="Adicionar Categoria"
              className="w-3 h-3 lg:w-6 lg:h-6"
            />
          </button>
          <button
            onClick={() => setModalCriarAtivo(true)}
            className="cursor-pointer font-inter font-bold text-[10px] lg:text-sm text-(--verdeSec) bg-(--branco) rounded-full border border-(--verdeSec) px-1 py-1 lg:px-2 lg:py-2 hover:text-(--preto) hover:border-(--preto)"
          >
            Criar Categoria
          </button>
        </div>

        {/* Tags de Categorias Adicionadas */}

        {categorias.length === 0 ? (
          <p className="text-left break-all font-inter text-(--error) font-medium text-xs lg:text-sm">
            Não pode ficar vazio, por favor selecione uma categoria.
          </p>
        ) : (
          categorias.map((cat, index) => (
            <SelectCategoryCreate
              key={index}
              index={index}
              valorAtual={cat} // Passando o valor salvo no pai
              todasSelecionadas={categorias} // Passa o array completo de categorias como uma nova prop para o filho
              onRemove={removerCategoria} // Passando a função de fechar
              onSelect={atualizarCategoria} // Passando a função de atualizar
            />
          ))
        )}
        {modalCriar && <CreateCategory isOpen={true} onClose={handleClose} />}
      </div>
    </div>
  );
}
