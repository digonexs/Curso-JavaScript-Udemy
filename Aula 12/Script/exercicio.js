/*
Faça a soma de dois inputs feito pelo usuário, utilizando o MÉTODO prompt();

exiba o resoltado dessa soma utilizando o MÉTODO alert();
*/

let valorUm = prompt('Informe o primeiro valor');
let valorDois= prompt('Informe o segundo valor');

valorUm = Number(valorUm);
valorDois = Number(valorDois);

let resultadoSoma = valorUm + valorDois;

alert('O resultado da soma dos dois valores informado é de: ' + resultadoSoma);