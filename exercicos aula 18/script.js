class pessoa {
  #nome; #cpf;
  constructor(nome, cpf){
    this.#nome = nome;
    this.#cpf = cpf;
  
  }
  get nome(){return this.#nome;}

  apresentar(){
    console.log('olá meus nome é ' + this.#nome 
      + ', e meu cpf é ' + this.#cpf);
    
  }
}
class aluno extends pessoa{
  #matricula ;  #curso;
  constructor(nome, cpf, matricula, curso){
    super(nome,cpf);
    this.#matricula = matricula;
    this.#curso = curso;
  }
  get curso(){return this.#curso;} 
}
let objetoPessoa = new pessoa('Ruan', '000.000.000.00');
let objetoAluno = new aluno('felipe', '000.000.000.00','000','react');
objetoPessoa.apresentar();
objetoAluno.apresentar();
console.log(`curso: ${objetoAluno.curso}`);