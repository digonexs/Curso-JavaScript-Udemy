let numero = 20.4550;
let numero2 = 2.5;
let numeroConvertido = 150;

console.log(numero.toString() + numero2.toString()); // Convertendo os valores para string, porém não mudando o tipo number da variável.

numeroConvertido = numeroConvertido.toString(); // Alterando o valor e o tipo da variável para string.

console.log(numero.toString(2)); // Para ver a representação binária do número declarado na variável. 

console.log(numero.toFixed(2)); // Limita o número de casas decimais de acordo com o desejado sem alterar o valor real da variável.

console.log(Number.isInteger(numero)); // Método que irá verificar se o valor da variável é um inteir ou não, retornando um true ou false.

let variavelTemporaria = numero * 'Ola'; 
console.log(Number.isNaN(variavelTemporaria)); // Verifica se o valor da variável é uma conta válida ou não, retorna um true ou false.



