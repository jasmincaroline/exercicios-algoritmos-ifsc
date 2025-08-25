//7) Ler dois valores numéricos inteiros (representados pelas variáveis A e B) e apresentar
//o resultado do quadrado da diferença do primeiro valor (variável A) em relação ao
//segundo valor (variável B).

let cotacao = parseFloat(prompt("Cotação do dólar (US$):"));
let dolares = parseFloat(prompt("Valor em dólares (US$):"));

let reais = cotacao * dolares;

alert("Valor em reais: R$ " + reais.toFixed(2));
