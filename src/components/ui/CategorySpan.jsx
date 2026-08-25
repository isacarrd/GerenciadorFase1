export function CategorySpanMain({ children }) {
  return (
    <span className="font-inter font-bold text-[10px] lg:text-sm text-(--verdePrim) bg-(--branco) rounded-full border-2 border-(--verdePrim) px-1 py-1 lg:px-2 lg:py-2">
      {children}
    </span>
  );
}
