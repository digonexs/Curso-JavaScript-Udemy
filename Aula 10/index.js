// TIPOS DE DADOS PRIMITIVOS
const tipoString = 'Rodrigo';     // TIPO STRING (TEXTOS)

const tipoNumérico = 21;          // TIPO NUMBER (NÚMERICO)

const tipoPontoFlutuante = 1.80;  // TAMBÉM TIPO NUMBER (NÚMERICO)

let variavelVazia;                /* QUANDO A VARIÁVEL É APENAS DECLARADA, E NÃO RECEBE UM VALOR E NÃO É INICIALIZADA 
ELA FICA COMO undefined (VALOR INDEFINIDO) */
  
let variavelNula = null;          /* TIPO NULO, TAMBÉM É UMA VARIÁVEL VAZIA, PORÉM DIFERENTE DE undefined, NÃO TEM VALOR 
MAS PODE SER MANIPULADA DURANTE O CÓDIGO E RECEBER UM OUTRO VALOR */


const tipoLogico = true;          // TIPO BOOLEAN, VARIAÉVEL LÓGICA QUE SÓ PÓDE TER DOIS VALORES, SENDO ELES TRUE //
const tipoLogico2 = false;        // OU FALSE (verdadeiroou falso) //


/* CASO HAJA DÚVIDAS SOBRE UM TIPO DE DADO EM JAVA SCRIPT. BASTA UTILIZAR A FUNÇÃO typeof PARA CHECHAR O TIPO
BASTA SEGUIR: */

console.log(typeof tipoString); /* Checando o tipo de dado que a variável tipoString está armazenando. O retorno 
esperado é String. */