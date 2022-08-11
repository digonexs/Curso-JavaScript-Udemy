/* 
Altere os valores das variáveis utilizando outras variáveis. 

Sendo: 
- variável um, recebendo o valor de A
- variável dois, recebendo o valor de B
- variável três, recebendo o valor de C

Mude os valores dela para B,C e A respectivamente.
*/

let varUm = 'A';
let varDois= 'B';
let varTres= 'C';
let varBackup;

console.log(varUm , varDois , varTres);

//ALTERANDO SEUS VALORES

varBackup = varUm;
varUm = varDois;
varDois = varTres;
varTres = varBackup;

console.log(varUm , varDois , varTres);

//OUTRA FORMA DE FAZER SEM CRIAR UMA VARIÁVEL DE BACKUP É:

let varA = 'A';
let varB= 'B';
let varC= 'C';

console.log(varA , varB , varC);

//ALTERANDO SEUS VALORES

[varA, varB, varC] = [varB, varC, varA];

console.log(varA , varB , varC);