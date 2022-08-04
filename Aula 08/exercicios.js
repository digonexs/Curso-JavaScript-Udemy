/* EXERCÍCIO 

LET E CONST

APRESENTE NO CONSOLE A SEGUINTE MENSAGEM:

Rodrigo Barros [variável] tem 21 [variável] anos, pesa 70 [variável] KG
tem 1.80m [variável] de altura e seu IMC é de  XXXX [variável]
*/

const nome = 'Rodrigo';
const sobrenome = 'de Barros';
let idade = 21;
let anoNascimento = 2001;
let peso = 70;
let altura = 1.80;
let imc = peso / (altura * altura);

//CONCATENANDO UTILIZANDO ,
console.log(nome , sobrenome , "tem" , idade , "anos, nasceu em", anoNascimento , ", pesa" , peso , "KG");
console.log("tem" , altura , "M de altura e seu IMC (Indice de Massa Corporal) é de:" , imc);

console.log()//espaço;

// OUTRA FORMA DE CONCATENAR, UTILIZANDO O +
console.log(nome + sobrenome + "tem" + idade + "anos, nasceu em" + anoNascimento + ", pesa" + peso + "KG");
console.log("tem" + altura + "M de altura e seu IMC (Indice de Massa Corporal) é de:" + imc);

console.log()//espaço;

// OUTRA FORMA DE CONCATENAR, UTILIZANDO O ` (TEMPLATE STRINGS)
console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNascimento} , pesa ${peso}KG`);
console.log(`tem ${altura}M de altura e seu IMC (Indice de Massa Corporal) é de: ${imc}`);
