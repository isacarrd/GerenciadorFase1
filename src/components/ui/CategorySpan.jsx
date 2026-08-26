export function CategorySpanMain({ children }) {
  return (
    <span className="font-inter font-bold text-[10px] lg:text-sm text-(--verdePrim) bg-(--branco) rounded-full border-2 border-(--verdePrim) px-1 py-1 lg:px-2 lg:py-2">
      {children}
    </span>
  );
}

export function CategoryProduct({ children, active }) {
  if (active) {
    return (<span className="font-inter font-bold text-[10px] lg:text-sm text-(--preto) bg-(--cinza) rounded-full border-2 border-(--cinza) px-1 py-1 lg:px-2 lg:py-2">
      {children}
    </span>)
  } else {
    return (
      <span className="font-inter font-bold text-[10px] lg:text-sm text-(--noEstoque) bg-(--cinza) rounded-full border-2 border-(--cinza) cursor-not-allowed px-1 py-1 lg:px-2 lg:py-2">
        {children}
      </span>
    );
  }
}

export function SelectCategory({ children }) {}
