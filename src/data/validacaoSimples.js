export function validarCampos(nomeProd, descProd, categProd, quantProd) {
  const categVazia = categProd.includes('')
  
  let alertMessage = ""
  if (nomeProd == "") alertMessage += 'Nome do produto não pode ficar vazio. \n'
  if (descProd == "") alertMessage += 'A descrição do produto não pode ficar vazia. \n'
  if (categProd.length == 0) alertMessage += 'O produto precisa ter pelo menos uma categoria. \n'
  if (categVazia) alertMessage += 'Selecione uma categoria válida. \n'
  if (quantProd < 0) alertMessage += 'A quantidade do produto não pode ser MENOR do que zero. \n'

  if (alertMessage != '') {
    alert(alertMessage)
    console.error('Falha na inserção de dados, tente novamente.')
    return false
  }

  console.log("%c Operação concluída com sucesso!", "background-color: green;")
  return true
}