import { useEffect, useState } from "react";
import { getCategoriasUnicas, subscribeCategorias } from "../data/criarCategoria";

export function useCategorias() {
  const [categorias, setCategorias] = useState(getCategoriasUnicas);

  useEffect(() => {
    const atualizar = () => setCategorias(getCategoriasUnicas());
    atualizar();
    return subscribeCategorias(atualizar);
  }, []);

  return categorias;
}