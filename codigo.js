let itens = [];

function adicionarItem(arranjo, item) {
  arranjo.push(item);
  alert(`Item "${item}" adicionado com sucesso!`);
}

function mostrarItens(arranjo) {
  if (arranjo.length === 0) {
    alert("Nenhum item cadastrado.");
  } else {
    alert("Itens cadastrados:\n" + arranjo.join("\n"));
  }
}

function atualizarItem(arranjo, indice, novoValor) {
  if (indice < 0 || indice >= arranjo.length) {
    alert("Posição inválida!");
  } else {
    let antigo = arranjo[indice];
    arranjo[indice] = novoValor;
    alert(`Item "${antigo}" atualizado para "${novoValor}".`);
  }
}

function removerItem(arranjo, tipo) {
  if (arranjo.length === 0) {
    alert("Nenhum item para remover.");
    return;
  }

  if (tipo === "primeiro") {
    let removido = arranjo.shift();
    alert(`Item "${removido}" removido do início.`);
  } else if (tipo === "último") {
    let removido = arranjo.pop();
    alert(`Item "${removido}" removido do final.`);
  } else {
    alert("Tipo de remoção inválido.");
  }
}

function menu() {
  let opcao;
  do {
    opcao = prompt(
      "Sistema de Controle de Itens\n\n" +
      "1. Adicionar item\n" +
      "2. Mostrar itens\n" +
      "3. Atualizar item\n" +
      "4. Remover item\n" +
      "5. Sair\n\n" +
      "Escolha uma opção:"
    );

    switch (opcao) {
      case "1":
        let novoItem = prompt("Digite o item a ser adicionado:");
        if (novoItem) adicionarItem(itens, novoItem);
        break;
      case "2":
        mostrarItens(itens);
        break;
      case "3":
        let indice = parseInt(prompt("Digite o índice do item a ser atualizado:"));
        let novoValor = prompt("Digite o novo valor:");
        if (!isNaN(indice) && novoValor) atualizarItem(itens, indice, novoValor);
        break;
      case "4":
        let tipo = prompt("Digite 'primeiro' ou 'último' para remover o item:");
        removerItem(itens, tipo.toLowerCase());
        break;
      case "5":
        alert("Saindo do sistema...");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "5");
}

menu();
