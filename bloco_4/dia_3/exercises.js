let n = 1;
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
