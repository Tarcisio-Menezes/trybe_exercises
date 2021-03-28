// 1- Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 7;
let asteriscos = ['*'];
let linha = [];


if (n > 1) {
  for ( index = 0; index < n; index +=1) {
  linha = linha + asteriscos;
}
  for (index2 = 0; index2 < index; index2 +=1){
    console.log (linha);
}
}
else {
  console.log ('Digite um número maioir que 1!')
}

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

let n = 7;
let piramide = ['*'];
let base = '';

if ( n > 1) {
  for (index = 0; index <= n; index +=1) {
    base = base + piramide;
    console.log (base);
}
}
else {
  console.log ('Digite um número maioir que 1!')
}

// Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//Dica: você vai precisar fazer um loop que vá de 0 ao número definido; Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let n = 11;
let score = 0;
let score_impar = 0;

for (index = 0; index <= n; index +=1) {

  if ( n % 2 != 0) {

  if (n % index === 0 && index != 1 && index != n) {
      score_impar = score_impar + 1;
    }

  else if (n/index === 1 && index === n) {
    score = score + 1;
  }
 
  else if (n/index === n && index === 1) {
    score = score + 1;
  }

  }

  }

  if (score > score_impar ) {
    console.log (n, 'é um número primo!');
  }

  else {
    console.log (n, 'não é um número primo!');
  }
  

