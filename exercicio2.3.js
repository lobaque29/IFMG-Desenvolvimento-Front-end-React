let login = "ruan";
let senha = "1234";

let loginPrompt = prompt("Digite seu login:");
let senhaPrompt = prompt("Digite sua senha:");

if (loginPrompt === login && senhaPrompt === senha) {
  alert("Login bem-sucedido!");
} else {
  alert("Login ou senha incorretos.");
}