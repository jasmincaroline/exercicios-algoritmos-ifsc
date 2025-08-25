//5) Ler dois valores para as variáveis A e B e efetuar a troca dos valores de forma que a
//variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
//variável A. Apresentar os valores após a efetivação do processamento da troca.

let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");

let temp = A;
A = B;
B = temp;

alert("Depois da troca:\nA = " + A + "\nB = " + B);
