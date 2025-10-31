
function Tabuada() {
  let num = prompt("Digite um número para ver a tabuada:");
  for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
  }
  return num;
}
prompt("Bem-vindo ao programa de tabuada! Pressione Enter para começar.");
let continuar = "s";
while (continuar.toLowerCase() === "s") {
  Tabuada();
  continuar = prompt("Deseja ver a tabuada de outro número? (s/n)");  


prompt("Pressione Enter para sair."); 
alert("Obrigado por usar o programa de tabuada!");
console.log("Programa encerrado.");

if (continuar.toLowerCase() !== "s") {
  alert("Obrigado por usar o programa de tabuada!");
  console.log("Programa encerrado.");
}