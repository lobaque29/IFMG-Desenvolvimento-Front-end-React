while (true) {  
    let numero = parseInt(prompt("Digite um número para verificar se é primo (ou digite um número negativo para sair): "));
    if (numero < 0) {
        console.log("Encerrando o programa.");
        break;
    }
    let numeroPrimo = true;
    if (numero === 1 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13 || numero === 17 || numero === 19) {
        numeroPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                numeroPrimo = false;
                break; // Sai do loop assim que encontrar um divisor
            }
        }   
    }
    if (numeroPrimo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}