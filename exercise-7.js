//7) Ler dois valores numéricos inteiros (representados pelas variáveis A e B) e apresentar
//o resultado do quadrado da diferença do primeiro valor (variável A) em relação ao
//segundo valor (variável B).

let A = parseInt(prompt("Valor A:"));
let B = parseInt(prompt("Valor B:"));

let diferenca = A - B;
let resultado = diferenca * diferenca;

alert("Quadrado da diferença: " + resultado);
