alert('Olá Mundo!');
/* 
O método alert() exibe uma mensagem no navegador por meio de uma caixa de diálogo, que nada mais é que uma pequena janela popup. 
Além do texto, também é exibido um botão de confirmação para indicar que a pessoa realmente leu a mensagem. Portanto, a janela 
só será fechada após o clique no botão de confirmação.
*/

//---------------------------------------------------------------------------------------------------------------------------------

confirm('Deseja prosseguir?');
/*
Outro tipo de caixa de diálogo é o MÉTODO confirm(). Seu objetivo é permitir que a pessoa usuária da página decida se deseja ou
não executar uma ação determinada. Para isso, exibe uma janela modal com uma mensagem e dois botões: um de confirmação e outro 
que cancela a ação.  

 Seus retornos são: true ou false (verdadeiro ou falso).
 */

//---------------------------------------------------------------------------------------------------------------------------------
prompt('Informe seu nome:');
/*
É responsável por exibir uma janela em pop up com um input para que o usuário 
passe alguma informação string. Ele retorna uma string que foi preenchida pelo usúário ou um valor nulo.
*/