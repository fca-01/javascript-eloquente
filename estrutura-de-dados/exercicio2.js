/* 
Os arrays possuem o método reverse, que modifica o array invertendo a ordem em que os elementos aparecem. Para esse exercício, escreva duas funções: reverseArray e reverseArrayInPlace. A primeira (reverseArray) recebe um array como argumento e produz um novo array que tem os mesmos elementos com ordem inversa. A segunda (reverseArrayInPlace) funciona da mesma forma que o método reverse, só que nesse caso, invertendo os elementos do próprio array que foi fornecido como argumento. Ambas as funções não devem usar o método padrão reverse.
 */

function reverseArray(array){
  let newArray = []

  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}


function reverseArrayInPlace(array){
  let left = 0
  let right = array.length - 1

  while( left < right ){
    let temp = array[left]
    array[left] = array[right]
    array[right] = temp

    left++
    right--
  }
  return array
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]