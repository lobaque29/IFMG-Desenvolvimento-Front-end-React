class empresa {
  #nome;
  constructor(nome){this.#nome = nome;}
  get nome() {return this.#nome}
}

class empregado {
  #nome; #empresa;
  constructor(nome, empresa){
    this.#nome = nome;
    this.#empresa = empresa;
  }
  
  get nome() {return this.#nome}
  get empresa() {return this.#empresa}
  
  info(){
    console.log(this.nome + ' , trabalha na empresa ' + this.empresa.nome);
  }
}

objetoEmpresa = new empresa("Microsoft");
empregadoObjeto = new empregado("Ruan", objetoEmpresa);
empregadoObjeto.info();



