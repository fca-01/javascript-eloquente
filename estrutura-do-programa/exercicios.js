/* 
  Exercícios do livro JavaScript Eloquente
 */

/* 
Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:
#
##
###
####
#####
######
#######
 */

for( var i = 1; i < 8; i++ ) {
  console.log('#'.repeat(i));
}

/* 
Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. Para números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), imprima Buzz.

Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis ambos por 3 e 5 (e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles).
*/

for (let i = 1; i <= 100; i++) {
  let output = '';

  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';

  console.log(output || i);
}

/* 
Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres. A cada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um tabuleiro de xadrez.

Quando você tiver o programa que gere este padrão, defina a variável size = 8 e altere programa para que ele funcione para qualquer size, a saída da grade de largura e altura.
 */

let size = 8;
let board = '';

for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    board += '# '.repeat(size / 2);
  } 
  else {
    board += ' #'.repeat(size / 2);
  }
  board += '\n';
}

console.log(board);
