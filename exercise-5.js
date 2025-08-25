let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");

let temp = A;
A = B;
B = temp;

alert("Depois da troca:\nA = " + A + "\nB = " + B);