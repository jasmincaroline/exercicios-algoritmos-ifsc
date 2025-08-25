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