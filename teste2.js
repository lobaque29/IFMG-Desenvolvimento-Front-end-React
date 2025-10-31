function TipoGeometria() {
    let tipo = "Retângulo";
    return tipo;
}
let geometria = TipoGeometria();
console.log("O tipo de geometria é: " + geometria);

function CalcularPerimetroRetangulo(base, altura) {
    let perimetro = 2 * (base + altura);
    return perimetro;
}
let perimetroRetangulo = CalcularPerimetroRetangulo(5, 4);
console.log("O perímetro do retângulo é: " + perimetroRetangulo);
     
function CalcularDiagonalRetangulo(base, altura) {

    function CalcularArea(base, altura) {
        let area = base * altura;
        return area;
    }
    let diagonal = Math.sqrt(base * base + altura * altura);
    let area = CalcularArea(base, altura);
    return { diagonal: diagonal, area: area };
}
let resultado = CalcularDiagonalRetangulo(5, 4);
console.log("A diagonal do retângulo é: " + resultado.diagonal);
console.log("A área do retângulo é: " + resultado.area);