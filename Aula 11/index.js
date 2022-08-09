/*  Operadores Aritméticos: 
+ responsável por fazer adição, mas também por concatenar
- responsável por fazer a subtração
* responsável por fazer a multiplicação
/ responsável por fazer a divisão
** responsável por fazer a potênciação
% responsável por retornar o resto de uma divisão
*/ 

// CALCULANDO SOMA, UTILIZANDO OPERADOR ARITMÉTICO +
let numero01 = 5;
let numero02 = 5;
console.log(numero01 + numero02);

// CALCULANDO SUBTRAÇÃO, UTILIZANDO OPERADOR ARITMÉTICO -
let numero03 = 100;
let numero04 = 50;
console.log(numero03 - numero04);

// CALCULANDO MULTIPLICAÇÃO, UTILIZANDO OPERADOR ARITMÉTICO *
let numero05 = 10;
let numero06 = 10;
console.log(numero05 * numero06);

// CALCULANDO DIVISÃO, UTILIZANDO OPERADOR ARITMÉTICO /
let numero07 = 1000;
let numero08 = 2;
console.log(numero07 / numero08);
// RETORNANDO O RESTO DA DIVISÃO COM OPERADOR %
console.log(numero07 % numero08);

// CALCULANDO POTÊNCIA, UTILIZANDO OPERADOR ARITMÉTICO **
let numero09 = 100;
let numero10 = 2;
console.log(numero09 ** numero10);

/*  ORDEM DE PRIORIDADE DE EXECUÇÃO EM JS
()
**
* / %¨
+ -
*/

/*  OPERADOR DE INCREMENTO e DECREMENTO 
++ incremento
-- decremento
*/
let contador = 1;
contador++; // PODE SER FEITO TANTO PRÉ QUANTO PÓS, EXEMPLO: ++contador
console.log(contador);
//--------------------------------------------------------------------------
let contador01 = 2;
contador01--; // PODE SER FEITO TANTO PRÉ QUANTO PÓS, EXEMPLO: --contador01
console.log(contador01);

// PARA INCREMENTAR OU DECREMENTAR, SENDO MAIS DO QUE DE UM EM UM, PODEMOS UTILIZAR:
contador = contador + 2;
console.log(contador);

//OU

const incrementar = 2;
contador = contador + incrementar;
console.log(contador);

// UMA MESMA FORMA DE FAZER O EXEMPLO ACIMA É:
contador +=incrementar; //ou +=2 ou também utilizar qualquer outro operador aritmético.
console.log(contador);

//ERRO NaN - Not a number // CONVERSÃO DE DADOS
const num1 = 10;
const num2 = parseInt('5'); //Convertendo o '5' para int
console.log(num1 + num2);

const num3 = parseFloat('5.2'); //Convertendo o '5' para float
console.log(num1 + num3);

//ou
 
num4 = Number('5'); //Convertendo o '5' para number, tanto float ou int
console.log(num1 + num4);
