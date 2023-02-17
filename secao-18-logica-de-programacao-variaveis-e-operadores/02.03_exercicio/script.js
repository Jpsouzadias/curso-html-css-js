//pedir para o usuário digitar um número 
var n1 = prompt("digite um número");
//converter em número inteiro
n1 = parseInt(n1);

//pedir para o usuário digitar outro número  
var n2 = prompt("digite outro número");
//converter em número inteiro
n2 = parseInt(n2);

/* mostrar um alert com o seguinte texto "O resto da divisão de (n1) por (n2) é: (resultado)" */
alert("O resto da divisão de "+ n1 +" por " + n2 +" é: " + (n1 % n2));

/* mostrar um alert com o seguinte texto "O número elevado a (n1) por (n2) é: (resultado)" */
alert("O número elevado a "+ n1 +" por "+ n2 +" é: " + (n1 ** n2));