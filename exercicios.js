const Lista = ["arroz, feijao, carne, batata, salada"];

function adicionarItem();
let item = prompt("digite o item que voce quer adicionar");
    if(item){
        Lista.push(item);
        console.log(`Item "${item} adicionado a lista`);
    } else {
        console.log("nenhum item foi adicionado");
    }
