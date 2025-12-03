try{
  let a = Number(prompt('digite valor de a:'));
  let b = Number(prompt('digite valor de b:'));
  let resultado = a / b;
  if(isNaN(resultado)){
    throw new Error('Entrada inválida: Certifique-se de digitar números válidos para a e b.');
  }
  if(resultado === Infinity || resultado === -Infinity){
    throw new Error('Erro: Divisão por zero não é permitida.');
  }
  alert(resultado);
}catch(erro){
  console.log('erro:' + erro.name);
  console.log('mensagem:' + erro.message);
}