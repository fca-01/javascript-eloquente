##  Palavras-chave e Palavras Reservadas

Palavras que tem um significado especial, como var, não podem ser usadas como nomes de variáveis. Estas são chamadas keywords (palavras-chave). Existe também algumas palavras que são reservadas para uso em futuras versões do JavaScript. Estas também não são oficialmente autorizadas a serem utilizadas como nomes de variáveis, embora alguns ambientes JavaScript as permitam. A lista completa de palavras-chave e palavras reservadas:

break, case, catch, continue, debugger, default, delete, do, else, false, finally, for, function, if, implements, in, instanceof, interface, let, new, null, package, private, protected, public, return, static, switch, throw, true, try, typeof, var, void, while, with, yield, this

## Fluxo de Controle

Quando seu programa contém mais que uma declaração, as declarações são executadas, previsivelmente, de cima para baixo. Como um exemplo básico, este programa tem duas declarações. A primeira pergunta ao usuário por um número, e a segunda, que é executada posteriormente, mostra o quadrado deste número:

	var theNumber = Number(prompt("Pick a number", ""));
	alert("Your number is the square root of " + theNumber * theNumber);

## Execução Condicional

A execução condicional é escrita, em JavaScript, com a palavra-chave `if`. No caso mais simples, nós queremos que algum código seja executado se, e somente se, uma certa condição existir.

	var theNumber = Number(prompt("Pick a number", ""));
	if (!isNaN(theNumber))
	  alert("Your number is the square root of " +
	        theNumber * theNumber);

Com essa modificação, se você fornecer "queijo" como argumento de entrada, nenhuma saída será retornada.

A palavra-chave `else` pode ser usada, juntamente com `if`, para criar dois caminhos distintos de execução.

	var theNumber = Number(prompt("Pick a number", ""));
	if (!isNaN(theNumber))
	  alert("Your number is the square root of " +
	        theNumber * theNumber);
	else
	  alert("Hey. Why didn't you give me a number?");

Se tivermos mais que dois caminhos a escolher, múltiplos pares de `if`/`else` podem ser "encadeados".

	var num = Number(prompt("Pick a number", "0"));

	if (num < 10)
	  alert("Small");
	else if (num < 100)
	  alert("Medium");
	else
	  alert("Large");
	  
## Loops While e Do

O fluxo de controle do loop nos permite voltar a um mesmo ponto no programa onde estávamos anteriormente e repeti-lo no estado atual do programa. Se combinarmos isso a uma variável contadora, conseguimos fazer algo assim:

	var number = 0;
	while (number <= 12) {
	  console.log(number);
	  number = number + 2;
	}
	
	// → 0
	// → 2
	// etc..

O loop `do` é uma estrutura de controle similar ao `while`. A única diferença entre eles é que o `do` sempre executa suas declarações ao menos uma vez e inicia o teste para verificar se deve parar ou não apenas após a primeira execução.

	do {
	  var name = prompt("Who are you?");
	} while (!name);
	console.log(name);

### Loops For

	for (var number = 0; number <= 12; number = number + 2)
	  console.log(number);
	// → 0
	// → 2
	// etc...

## Quebrando a execução de um Loop

Existe uma declaração especial chamada `break` que tem o efeito de parar a execução e sair do loop em questão.

Esse programa ilustra o uso da declaração `break`. Ele encontra o primeiro número que é, ao mesmo tempo, maior ou igual a 20 e divisível por 7.

	for (var current = 20; ; current++) {
	  if (current % 7 == 0)
	    break;
	}
	console.log(current);
	// → 21

## Resolvendo um valor com `switch`

	switch (prompt("What is the weather like?")) {
	  case "rainy":
	    console.log("Remember to bring an umbrella.");
	    break;
	  case "sunny":
	    console.log("Dress lightly.");
	  case "cloudy":
	    console.log("Go outside.");
	    break;
	  default:
	    console.log("Unknown weather type!");
	    break;
	}
