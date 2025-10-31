function MostrarNome(){
  console.log("ruan");
}
MostrarNome();// ...existing code...
function MostrarNome(){
  console.log("ruan");
}
MostrarNome();
// ...existing code...

// Sistema de controle de itens usando array (modularizado)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => {
    readline.question(pergunta, resposta => resolve(resposta));
  });
}

function adicionarItem(itens, item) {
  itens.push(item);
  console.log("Item adicionado.");
}

function mostrarItens(itens) {
  if (itens.length === 0) {
    console.log("Nenhum item para mostrar.");
    return;
  }
  console.log("Itens:");
  itens.forEach((it, i) => console.log(`${i + 1}. ${it}`));
}

function atualizarItem(itens, indice, novoValor) {
  if (indice < 0 || indice >= itens.length) {
    console.log("Índice inválido!");
    return false;
  }
  itens[indice] = novoValor;
  console.log("Item atualizado.");
  return true;
}

function removerPrimeiro(itens) {
  if (itens.length === 0) {
    console.log("Nada a remover.");
    return;
  }
  const removido = itens.shift();
  console.log("Removido (primeiro):", removido);
}

function removerUltimo(itens) {
  if (itens.length === 0) {
    console.log("Nada a remover.");
    return;
  }
  const removido = itens.pop();
  console.log("Removido (último):", removido);
}

async function menu() {
  const itens = [];
  let sair = false;

  while (!sair) {
    console.log("\n--- MENU ---");
    console.log("1. Adicionar item");
    console.log("2. Mostrar itens");
    console.log("3. Atualizar item");
    console.log("4. Remover primeiro item");
    console.log("5. Remover último item");
    console.log("6. Sair");

    const opc = await perguntar("Escolha uma opção: ");
    switch (opc.trim()) {
      case '1': {
        const item = await perguntar("Digite o item a adicionar: ");
        if (item.trim() === "") {
          console.log("Item vazio não é permitido.");
        } else {
          adicionarItem(itens, item.trim());
        }
        break;
      }
      case '2':
        mostrarItens(itens);
        break;
      case '3': {
        if (itens.length === 0) {
          console.log("Não há itens para atualizar.");
          break;
        }
        mostrarItens(itens);
        const pos = await perguntar("Informe a posição (número) do item a atualizar: ");
        const idx = parseInt(pos, 10) - 1;
        if (Number.isNaN(idx)) {
          console.log("Entrada inválida.");
          break;
        }
        const novo = await perguntar("Digite o novo valor: ");
        atualizarItem(itens, idx, novo.trim());
        break;
      }
      case '4':
        removerPrimeiro(itens);
        break;
      case '5':
        removerUltimo(itens);
        break;
      case '6':
        sair = true;
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }

  readline.close();
  console.log("Programa finalizado.");
}

menu();