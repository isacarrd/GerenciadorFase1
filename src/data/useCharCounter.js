export function useCharCounter(value, setValue, limit) {
  const currentLength = value?.length || 0;

  // Para campos de texto
  const handleChange = (e) => {
    const newValue = e.target.value;
    // Impede a digitação se passar do limite
    if (newValue.length <= limit) {
      setValue(newValue);
    }
  };

  // Para campos de array
  const handleArrayChange = (newArray) => {
    if (newArray.length <= limit) {
      setValue(newArray);
    }
  };

  return {
    handleChange,
    handleArrayChange,
    remaining: limit - currentLength,
    count: currentLength,
    limit
  };
}
