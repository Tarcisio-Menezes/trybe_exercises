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
