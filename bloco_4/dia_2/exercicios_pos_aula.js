let numbers = [5,9,3,19,70,8,100,2,35,27];
let resultado = 0;
let numero_maior = 0;
let impares = 0;
let menor_numero = 5100;
let lista = [];
let lista_div2 = [];


// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

for (let index=0; index < numbers.length; index +=1) {
  console.log (numbers[index]);
}

//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

for (let index = 0; index < numbers.length; index +=1) {
 resultado += numbers[index];
}

console.log (resultado);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

  let media = resultado/numbers.length;
 
  console.log (media);

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if ( media > 20) {
  console.log ('Valor maior que 20!');
}

else {
  console.log ('Valor menor ou igual a 20!');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > numero_maior) {
    numero_maior = numbers[index];
  }
}

console.log(numero_maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
  impares += 1;
}
}

if (impares === 0) {
  console.log ('Não existem números ímpares da array!');
  }

else {
  console.log ('Existem', impares,'valores ímpares!');
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

for (let index=0; index < numbers.length; index +=1) {
  if (numbers[index] < menor_numero) {
  menor_numero = numbers[index];
}
}
  console.log ('O menor número é o', menor_numero,'!');


//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

for (index=1; index <= 25; index +=1) {
  lista.push (index);
}

console.log (lista);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (index =1; index < lista.length; index +=1) {
  lista_div2.push (index/2);
}
  console.log (lista_div2);

