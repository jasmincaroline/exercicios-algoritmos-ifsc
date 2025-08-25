//6) Elaborar um programa que calcule e apresente o valor do volume de uma caixa
//retangular, utilizando a fórmula VOLUME <- COMPRIMENTO * LARGURA * ALTURA.

let comprimento = parseFloat(prompt("Comprimento:"));
let largura = parseFloat(prompt("Largura:"));
let altura = parseFloat(prompt("Altura:"));

let volume = comprimento * largura * altura;

alert("Volume da caixa: " + volume.toFixed(2));