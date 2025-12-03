class ValorNegativoError extends Error {
  constructor(){
    super('Erro: Valor negativo não é permitido.');
    this.name = 'ValorNegativoError';
  }
}

function calcularRaiz(valor) {
  if(valor < 0) {
    throw new ValorNegativoError();
  }
  return Math.sqrt(valor);
}
try {
  console.log(calcularRaiz(-9));
}catch(erro) {
  console.log('erro:' + erro.name);
  console.log('mensagem:' + erro.message);
}