//2) Um dos sócios da empresa XYZ LTDA ficou sabendo que você desenvolveu um
//programa de reajuste salarial para a empresa ABC LTDA e pediu que você desenvolva
//um programa similar. Na verdade ele está pedindo que você acrescente ao programa
//anterior à possibilidade dele informar não somente o salário atual do funcionário, mas
//também o valor percentual que deve ser incrementado para aquele funcionário, pois
//ele irá aplicar valores percentuais diferentes a cada funcionário.

let salario = prompt("Digite o salário atual:");
let percentual = prompt("Digite o percentual de aumento (%):");
let novoSalario = salario * (1 + percentual / 100);

alert("Novo salário: R$ " + novoSalario.toFixed(2));
