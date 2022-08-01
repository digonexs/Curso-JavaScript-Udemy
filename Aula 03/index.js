console.log('Rodrigo'); /*Não permite usar aspas simples dentro no texto, exemplo: console.log('Rodrigo 'Barros''); - Nesta caso poderia usar 
aspas dupla para exibição ou aspas duplas para passar o texto para função*/

console.log("Rodrigo Cavalcante"); /*Não permite usar aspas duplas dentro no texto, exemplo: console.log("Rodrigo "Barros" "); - Nesta caso 
poderia usar aspas simples para exibição ou aspas simples para passar o texto para função*/

console.log(`Rodrigo Cavalcante de Barros`); /*É utilizado para fazer templates strings, e permite o uso de ambas as aspas para exibição*/

console.log(12345 , 123.45); /*Em caso de exibição numérica (int e float / double), não é feito o uso das aspas*/

console.log('Rodrigo' , 21 , "anos" , 1.80 , `de altura`); /*Para passar mais de uma informação de diferente tipos, utilizamos a virgula para separarar
e concatenar os valores*/