console.log('inicio do programa');
let nome = 'IFMG';
try{
  console.log(nome);
}catch(erro){
  console.log('erro:' + erro.name);
  console.log('mensagem:' + erro.message);
}finally{
  console.log('fim do programa');
}

console.log('fim do progama');