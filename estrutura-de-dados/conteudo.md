## Objetos

Valores do tipo _objeto_ são coleções arbitrárias de propriedades, sendo que podemos adicionar ou remover essas propriedades da forma que desejarmos. Uma maneira de criar um objeto é usando a notação com chaves.

	var day1 = {
	  squirrel: false,
	  events: ["work", "touched tree", "pizza", "running",
	           "television"]
	};
	console.log(day1.squirrel);
	// → false
	console.log(day1.wolf);
	// → undefined
	day1.wolf = false;
	console.log(day1.wolf);
	// → false

Dentro das chaves, podemos informar uma lista de propriedades separadas por vírgulas. Cada propriedade é escrita com um nome seguido de dois pontos e uma expressão que fornece o valor da propriedade. Espaços e quebras de linha não fazem diferença.

O operador binário `in`, quando aplicado a uma _string_ ou a um objeto, retorna um valor booleano que indica se aquele objeto possui aquela propriedade. A diferença entre alterar uma propriedade para `undefined` e removê-la de fato, é que no primeiro caso, o objeto _continua com a propriedade_ (ela simplesmente não tem um valor muito interessante), enquanto que no segundo caso, a propriedade não estará mais presente no objeto e o operador `in` retornará `false`.

	var anObject = {left: 1, right: 2};
	console.log(anObject.left);
	// → 1
	delete anObject.left;
	console.log(anObject.left);
	// → undefined
	console.log("left" in anObject);
	// → false
	console.log("right" in anObject);
	// → true

Quando temos dois números, 120 e 120, podemos considerá-los exatamente o mesmo número, quer se refiram ou não aos mesmos bits físicos. Entretanto, no caso de objetos há uma diferença entre ter duas referências para o mesmo objeto e ter dois objetos diferentes que possuem as mesmas propriedades. Considere o código a seguir:

	var object1 = {value: 10};
	var object2 = object1;
	var object3 = {value: 10};

	console.log(object1 == object2);
	// → true
	console.log(object1 == object3);
	// → false

	object1.value = 15;
	console.log(object2.value);
	// → 15
	console.log(object3.value);
	// → 10
	
Quando comparamos objetos, o operador `==` do JavaScript irá retornar `true` apenas se ambos os objetos possuem exatamente o mesmo valor. Comparar objetos diferentes irá retornar `false` mesmo se eles tiverem conteúdos idênticos. Não existe uma operação nativa no JavaScript de _"deep" comparison_ (comparação "profunda"), onde se verifica o conteúdo de um objeto