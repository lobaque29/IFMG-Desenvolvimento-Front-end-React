let DepositoInicial =  500;
let TaxaDeJuros = 1/100 * 30; // 1% ao mês
let Deposito2mes = 200;
let Retirado3mes = -50;

let Montante = DepositoInicial * (1 + TaxaDeJuros) ** 3 + Deposito2mes * (1 + TaxaDeJuros) ** 2 + Retirado3mes * (1 + TaxaDeJuros);

console.log("O montante total na poupança após 3 meses é de R$ " + Montante.toFixed(2));