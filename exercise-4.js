//4) Pedro comprou um saco de ração com peso em quilos. Ele possui dois gatos, para os
//quais fornece a quantidade de ração em gramas. A quantidade diária de ração
//fornecida para cada gato é sempre a mesma. Faça um programa que receba o peso do
//saco de ração e a quantidade de ração fornecida para cada gato, calcule e mostre
//quanto restará de ração no saco após cinco dias.


let pesoSacoKg = prompt("Peso do saco de ração (kg):");
let racaoDiariaGato = prompt("Quantidade diária para cada gato (g):");

let pesoSacoGramas = pesoSacoKg * 1000;
let totalConsumido = racaoDiariaGato * 2 * 5; // 2 gatos, 5 dias

let restante = pesoSacoGramas - totalConsumido;

alert("Restam " + restante + " gramas de ração no saco após 5 dias.");