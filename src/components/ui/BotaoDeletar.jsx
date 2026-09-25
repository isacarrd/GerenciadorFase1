import deleteIco from "../../assets/delete.svg";
import removeIco from "../../assets/remove.svg";

// Btn dos Cards
export function BtnDelete({ onDelete }) {
  return (
    <button onClick={onDelete} className="cursor-pointer w-fit h-fit flex p-1 border lg:p-2 lg:border-2 border-(--error) rounded-[20px] lg:rounded-[40px] hover:bg-(--cinza)">
      <img src={deleteIco} alt="Deletar" className="w-4 h-4 lg:w-8 lg:h-8" />
    </button>
  );
}

// Só muda a estilização -> Btn do gerenciador de categorias
export function BtnDeleteManage({ onRemoveCateg }) {
  return (
    <button onClick={onRemoveCateg} className="cursor-pointer w-fit h-fit flex p-1 border lg:p-2 lg:border-2 border-(--error) rounded-[20px] lg:rounded-[40px] hover:bg-[#e2b5b3]">
      <img
        src={deleteIco}
        alt="Deletar"
        className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5"
      />
    </button>
  );
}

export function ClearCamp(props) {
  return (
    <button
      onClick={props.aoClicar}
      className="shrink-0 cursor-pointer hover:bg-(--searchBarEffect) bg-(--searchBar) w-fit h-fit rounded-3xl lg:p-2 p-1"
    >
      <img
        src={removeIco}
        alt="Limpar Campo"
        className="lg:w-6 lg:h-6 w-4 h-4"
      />
    </button>
  );
}
