import deleteIco from "../../assets/delete.svg";

// Btn dos Cards
export function BtnDelete({}) {
  return (
    <button className="cursor-pointer w-fit h-fit flex p-1 border lg:p-2 lg:border-2 border-(--error) rounded-[20px] lg:rounded-[40px] hover:bg-(--cinza)">
      <img src={deleteIco} alt="Deletar" className="w-4 h-4 lg:w-8 lg:h-8" />
    </button>
  );
}

// Só muda a estilização -> Btn do gerenciador de categorias
export function BtnDeleteManage({}) {
  return (
    <button className="cursor-pointer w-fit h-fit flex p-1 border lg:p-2 lg:border-2 border-(--error) rounded-[20px] lg:rounded-[40px] hover:bg-(--cinza)">
      <img
        src={deleteIco}
        alt="Deletar"
        className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5"
      />
    </button>
  );
}
