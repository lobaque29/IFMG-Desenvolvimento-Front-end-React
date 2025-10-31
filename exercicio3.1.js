function TipoTriangulo(a, b, c) {
  if (
    a + b > c &&
    a + c > b &&
    b + c > a
  ) {
    if (a === b && b === c) {
      console.log("Equilátero");
    } else if (a === b || a === c || b === c) {
      console.log("Isósceles");
    } else {
      console.log("Escaleno");
    }
  } else {
    console.log("Não é um triângulo");
  }
}

TipoTriangulo(10, 10, 15);
TipoTriangulo(10, 10, 10);
TipoTriangulo(10, 10, 5);
TipoTriangulo(1, 2, 3);