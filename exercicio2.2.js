function calcularAreaRetangulo(altura, largura) {
  return altura * largura;
}
function calcularAreaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}
function mediaTresNumeros(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log("Área do retângulo (5, 10):", calcularAreaRetangulo(5, 10));
console.log("Área do círculo (raio 7):", calcularAreaCirculo(7));
console.log("Média de (4, 8, 12):", mediaTresNumeros(4, 8, 12));