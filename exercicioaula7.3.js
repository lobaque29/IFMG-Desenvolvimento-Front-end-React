document.getElementById("meu botao").addEventListener("click", function(event) {
  console.log("tipo do evento:", event.type);
  console.log("elemento alvo:", event.target);
  console.log("elemento atual:", event.currentTarget);
  console.log("timestamp:", event.timeStamp);
}
);