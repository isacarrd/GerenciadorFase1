import searchLupa from '../../assets/search.svg'
// Sem lógica funcional no momento

export default function SearchBar() {
  return (
    <div className="flex flex-row px-6 lg:px-25">
      <div className="flex flex-row items-center">
        <img src={searchLupa} alt="Elemento de decoração" />
        <input type="text" name="searchBar" id="searchBar" placeholder='placeholder de teste' />
      </div>
    </div>
  );
}