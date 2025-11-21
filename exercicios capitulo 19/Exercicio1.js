
class Endereco {
  #rua; #numero; #cidade;
  constructor(rua, numero, cidade){
    this.#rua = rua;
    this.#numero = numero;
    this.#cidade = cidade;
  }
  toString(){
    return `${this.#rua}, ${this.#numero} - ${this.#cidade}`;
  }
}

class Pessoa{
  #nome; #cpf; #endereco;
  constructor(nome, cpf, endereco){
    this.#nome = nome;
    this.#cpf = cpf;
    this.#endereco = endereco;
  }
  get nome(){ return this.#nome; }
  get cpf(){ return this.#cpf; }
  get endereco(){ return this.#endereco; }

  toString(){
    return 'Nome: ' + this.nome + ' | CPF: ' + this.cpf + ' | Endereço: ' + this.endereco.toString();
  }
}

const endereco1 = new Endereco('Rua José Roberto Resende', 245, 'Belo Horizonte');
const pessoa1 = new Pessoa('Ruan','xxx-xxx-xxx-xx', endereco1);

console.log(endereco1.toString());
console.log(pessoa1.toString());
