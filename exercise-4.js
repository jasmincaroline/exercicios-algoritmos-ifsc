let pesoSacoKg = prompt("Peso do saco de ração (kg):");
let racaoDiariaGato = prompt("Quantidade diária para cada gato (g):");

let pesoSacoGramas = pesoSacoKg * 1000;
let totalConsumido = racaoDiariaGato * 2 * 5; // 2 gatos, 5 dias

let restante = pesoSacoGramas - totalConsumido;

alert("Restam " + restante + " gramas de ração no saco após 5 dias.");
