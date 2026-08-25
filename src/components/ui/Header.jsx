import icon from '../../assets/icon.svg'

export default function Header() {
  return (
    <header className="px-6 py-5 gap-1.5 bg-(--verdePrim) flex flex-row items-center lg:gap-3 lg:px-25 lg:py-10 ">
      <img src={icon} alt="Icon" className="w-6 lg:w-16" />
      <p className="text-xs lg:text-2xl text-(--preto) font-inter">
        Admin
      </p>
    </header>
  );
}