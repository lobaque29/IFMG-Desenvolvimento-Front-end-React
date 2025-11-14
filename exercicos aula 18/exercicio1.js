class Animal{
  constructor(nome, numerodePatas, som){
    this.nome = nome;
    this.numerodePatas = numerodePatas;
    this.som = som;
  }
  apresentar(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.numerodePatas} patas.`);
  }
}
class cachorro extends Animal{
  constructor(nome){
    super(nome, 4);
  }
  emitirSom(){
    return 'au, au';
  }
};
  class gato extends Animal{
    constructor(nome){
      super(nome, 4);
    }
    emitirSom(){
      return 'miau, miau';
    }
  };

  class passaro extends Animal{
    constructor(nome){
      super(nome, 2);
    }
    emitirSom(){
      return 'piu, piu';
    }
};
const cachorro1 = new cachorro('Rex');
const gato1 = new gato('Mia');
const passaro1 = new passaro('Lulu');
cachorro1.apresentar();
console.log(`O som do cachorro é: ${cachorro1.emitirSom()}`);
gato1.apresentar();
console.log(`O som do gato é: ${gato1.emitirSom()}`);
passaro1.apresentar();
console.log(`O som do pássaro é: ${passaro1.emitirSom()}`);

let Animais = [];

function menu(){
  let opcao;
  do {
    console.log(prompt('menu:'));
    console.log(prompt("cadastrar cachorro:"));
    console.log("cadastrar gato");
    console.log("cadastrar pássaro");
    console.log("cadastrar outro animal");
    console.log("listar todos os animais");
    console.log("emitir todos os sons");
    console.log("sair");

    opcao = prompt("escolha uma opção");

    switch(opcao) {
      case '1':
        let nomeCachorro = prompt("Digite o nome do cachorro:");
        let cachorro = new cachorro(nomeCachorro);
        Animais.push(new cachorro(nomeCachorro));
        break;

        case '2':
          let nomeGato = prompt('digite o nome do gato');
          let gato = new gato(nomeGato);
          Animais.push(new gato(nomeGato));
          break;

          case '3':
            let nomePassaro = prompt('digite o nome do pássaro');
            let passaro = new passaro(nomePassaro);
            Animais.push(new passaro(nomePassaro));
            break;
          
          case '4':
            let nomeAnimal = prompt("Digite o nome do animal:");
            let patas = parseInt(prompt("Digite o número de patas do animal:"));
            Animais.push(new Animal(nomeAnimal, patas));
            console.log("Animal cadastrado");
            break;

            case '5':
            console.log("\n--- listas dos Animais ---");
            Animais.forEach(animal => {
              console.log(`${animal.nome}: ${animal.emitirSom()}`);
            });
            break;  

            case '6':
              console.log("\n--- listas dos Animais ---");
              Animais.forEach(animal => {
                animal.apresentar();
              });
              break;
              
              case '0':
                console.log("Saindo do programa...");
                break;
                
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                break;
    }
  } while (opcao !== '0');
};
  
  
  
  
  
  
  
