let salario = prompt("Digite o salário atual:");
let percentual = prompt("Digite o percentual de aumento (%):");
let novoSalario = salario * (1 + percentual / 100);
alert("Novo salário: R$ " + novoSalario.toFixed(2));