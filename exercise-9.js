//9) Construir um programa que leia três valores numéricos inteiros (representados pelas
//variáveis A, B e C) e apresente como resultado final o valor do quadrado da soma dos
//três valores lidos.

let A = parseInt(prompt("Valor A:"));
let B = parseInt(prompt("Valor B:"));
let C = parseInt(prompt("Valor C:"));

let soma = A + B + C;
let resultado = soma * soma;

alert("Quadrado da soma: " + resultado);
