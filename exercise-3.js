//3) Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e
//mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da
//pessoa em dias e a idade da pessoa em semanas.
  
let anoNascimento = prompt("Ano de nascimento:");
let anoAtual = prompt("Ano atual:");

let idadeAnos = anoAtual - anoNascimento;
let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 365;   // Considerando ano sem bissexto
let idadeSemanas = Math.floor(idadeDias / 7);

alert(
  "Idade:\n" +
  idadeAnos + " anos\n" +
  idadeMeses + " meses\n" +
  idadeDias + " dias\n" +
  idadeSemanas + " semanas"
);