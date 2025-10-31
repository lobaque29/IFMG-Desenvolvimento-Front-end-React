function ValidarNumeroPrimo(numero) {
    let numeroPrimo = true;
    if (numero === 1 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13 || numero === 17 || numero === 19) {
        numeroPrimo = false;
    } else {
        for (let i = 2; i < Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                numeroPrimo = false;
            }
        }   
    }
    return numeroPrimo;
}
const numero = numeroPrimo = parseInt(prompt("Digite um número para verificar se é primo: "));
console.log(numero);
const resultado = ValidarNumeroPrimo(numero);
console.log("O número " + numero + " é primo? " + resultado);
