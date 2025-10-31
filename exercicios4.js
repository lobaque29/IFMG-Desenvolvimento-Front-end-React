function CalcularMedia(notas) {
    let soma = 0; 
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}
const notas = [7, 8, 6.5, 9, 5];
const media = CalcularMedia(notas);
console.log("A média das notas é: " + media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
} 