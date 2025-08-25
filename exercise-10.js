//10) Elaborar um programa que leia dois valores numéricos reais desconhecidos
//representados pelas variáveis A e B. Calcular e apresentar os resultados das quatro
//operações aritméticas básicas (soma, subtração, divisão e multiplicação)

let A = prompt("Valor A:");
let B = prompt("Valor B:");

alert(
  "Soma: " + (A - (-B)) + "\n" +            // forçar soma numérica
  "Subtração: " + (A - B) + "\n" +
  "Multiplicação: " + (A * B) + "\n" +
  "Divisão: " + (B != 0 ? (A / B) : "Não pode dividir por zero")
);
