let produto = prompt('Digite o nome do produto:');
switch (produto) {
    case 'maçã':
        console.log('Não vendemos este produto aqui');
    case 'tenis':
        let preco = parseFloat(prompt('Digite o preço do produto:'));
        let desconto = parseFloat(prompt('Digite o desconto (em %):'));
        let precoFinal = preco - (preco * (desconto / 100));
        alert('O preço final do ' + produto + ' é R$ ' + precoFinal.toFixed(2));
        break;
    case 'camisa':
        let precoCamisa = parseFloat(prompt('Digite o preço do produto:'));
        let descontoCamisa = parseFloat(prompt('Digite o desconto (em %):'));
        let precoFinalCamisa = precoCamisa - (precoCamisa * (descontoCamisa / 100));
        alert('O preço final da camisa é R$ ' + precoFinalCamisa.toFixed(2));
        break;
    case 'bermuda':
        let precoBermuda = parseFloat(prompt('Digite o preço do produto:'));
        let descontoBermuda = parseFloat(prompt('Digite o desconto (em %):'));
        let precoFinalBermuda = precoBermuda - (precoBermuda * (descontoBermuda / 100));
        alert('O preço final da bermuda é R$ ' + precoFinalBermuda.toFixed(2));
        break;
    case 'camiseta':
        let precoCamiseta = parseFloat(prompt('Digite o preço do produto:'));
        let descontoCamiseta = parseFloat(prompt('Digite o desconto (em %):'));
        let precoFinalCamiseta = precoCamiseta - (precoCamiseta * (descontoCamiseta / 100));
        alert('O preço final da camiseta é R$ ' + precoFinalCamiseta.toFixed(2));
        break;
    default:
        alert('Produto não encontrado');
        break;
}