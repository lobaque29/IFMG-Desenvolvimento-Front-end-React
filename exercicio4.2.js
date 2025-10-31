function GeradorSequenciaFibonacci(n) {
  const sequencia = [];
  for (let i = 0; i < n ; i++) {
    if (i === 0) {
      sequencia.push(0);
      console.log(sequencia);
    } else if (i === 1) {
      sequencia.push(1);
      console.log(sequencia);
    } else {
      sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
      console.log(sequencia);
    }
  }
  return sequencia;

}
const n = 10
const fibonacci  = GeradorSequenciaFibonacci(n);
console.log("A sequência de Fibonacci é: " + fibonacci);
console.log(fibonacci);