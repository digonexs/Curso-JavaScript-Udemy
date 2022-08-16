let umaString = 'UM TEXTO';

console.log(umaString[4]); // Para saber qual caracter ocupa o indice 4 

/*
Stings são indexadas, ou seja, cada caracter tem um indice. Um indice começa em 0 e vai assim em seguida, 01234567...

Para pegarmos um índice, utilizamos o exemplo de código a cima.

Quando pegamos um indice inesistente, ou seja, em uma palavra com indice totel de 7 casas, ao tentar pegar a oitava,
teremos como resultado o UNDEFINED. Da mesma forma ocorre ao tentar buscar um indice negativo.

Outra maneira de buscar e pegar um indice de uma string é: 
*/

console.log(umaString.charAt(6));

// Para encontrar em qual indice começa UMA PALAVRA expecifica, basta: 

console.log(umaString.indexOf('TEXTO')); //indicando que a palavra TEXTO começa no indice 3.

console.log(umaString.indexOf('X' , 3)); //indicando que a letra x está no indice 5, verificando a partir do indice  3.

console.log(umaString.lastIndexOf('E'));// começa do final da string para o início, ou seja, de trás pra frente
