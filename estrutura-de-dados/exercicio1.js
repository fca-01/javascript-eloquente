/* 
Escreva uma função chamada range que recebe dois argumentos, start (início) e end (fim), e retorna um array contendo todos os números a partir do valor start até o valor end (incluindo-o).

Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma desses números. Execute o programa anterior e veja se o resultado retornado é de fato 55.
 */

function range(start, end, increment){
  let array = []

  if (increment === undefined) {
    increment = start < end ? 1 : -1;
  }
  
   if (increment > 0) {
    for (var i = start; i <= end; i += increment) {
      array.push(i);
    }
  } else {
    for (var i = start; i >= end; i += increment) {
      array.push(i);
    }
  }
  
  return array
}

function sum(array){
  let sum = 0
  for(let i = 0; i < array.length; i++ ){
    sum = sum + array[i]
  }
  return sum
}

console.log(range(5, 2, -1));
