export function readImage(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => resolve(leitor.result);
    leitor.onerror = (erro) => reject(erro);
    leitor.readAsDataURL(arquivo);
  });
}