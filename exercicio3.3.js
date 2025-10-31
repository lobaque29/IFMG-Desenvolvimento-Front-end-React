const pessoa = new Object();
pessoa.nome = "ruan";
pessoa.sobrenome = "felipe";
pessoa.idade = 34;
pessoa.profissao = "Desenvolvedor";
pessoa.apresentar = function() {
  return `Olá, meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
}
if (typeof window !== 'undefined') {
  window.onload = function() {
    alert(pessoa.apresentar());
  }  
console.log(pessoa.apresentar());
}


