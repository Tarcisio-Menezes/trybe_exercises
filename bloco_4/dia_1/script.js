let a = 10;
let b = 5;
let c = 15;

// parte 1

if (a > b) {
  console.log ('Número', a ,'venceu!!');    
}

else {
  console.log ('O número', b ,'venceu!!');
}

// parte 2 e 3

if (a>b && a>c) {
  console.log ('Ooxe, número', a, 'ainda é o maior!');
}

else if (b>c && b>a) {
  console.log ('O número', b, 'é o maior!');
} 

else {
  console.log ('O número', c, 'ainda é o maior!');
}

// parte 4

if (a>0) {
  console.log ('Positive');
}

else {
  console.log ('negative');
}

// parte 5
let a1 = 67;
let a2 = 100;
let a3 = 13;
let soma = a1+a2+a3;

if (soma === 180) {
  console.log ('true');
}

else {
  console.log ('false');
}

// parte 6
let peca = 'cavalo';

switch (peca.toLowerCase()) {
  case 'peão':
  console.log('Uma casa para frente, duas quando primeira jogada. Come apenas em diagonal');
  break;
  case 'torre':
  console.log ('Quantas casas quiser horizontal ou vertical');
  break;
  case 'bispo':
  console.log ('Quantas casas quiser na diagonal');
  break;
  case 'cavalo':
  console.log ('Quatro casas na forma de L');
  break;
  case 'rei':
  console.log ('Uma casa para qualquer direção');
  break;
  case 'rainha':
  console.log ('Faz todos os movimentos do tabuleiro, exceto o movimento do cavalo');
  break;
}

// parte 7

let nota = 17.6659;

if (nota < 0 || nota > 100) {
  console.log ('Erro - Digite um valor válido!');
}

else if (nota >= 90) {
  console.log ('Parabéns! Tirou um A!');
}

else if (nota >=80) {
  console.log ('Parabéns! Tirou um B');
}

else if (nota >= 70) {
  console.log ('Parabéns! Tirou um C');
}

else if (nota >= 60) {
  console.log ('Tirou um D, bora melhorar!');
}

else if (nota >=50) {
  console.log ('Tirou um E, bora melhorar!');
}

else if (nota < 50) {
  console.log ('Tirou um F, bora melhorar!');
}

else {
  console.log ('Erro desconhecido, digite valores válidos');
}

// Parte 8

let n1 = 1;
let n2 = 21;
let n3 = 3;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
  console.log ('True');
}

else {
  console.log ('False');
}

// parte 9

let n1 = 10;
let n2 = 20;
let n3 = 30;

if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0 ) {
  console.log ('True');
}

else {
  console.log ('False');
}

// parte 10

let custo = 100;
let venda = 135;
let lucro;
let imposto = (20/100 * custo);

if (custo > 0 && venda > 0) {
  lucro = venda - custo - imposto;
  console.log ('O lucro em cima do produto foi de',lucro,'reais.');
}

else {
  console.log ('Erro - Insira valores válidos!');
}

// parte 11


let sal_inss;
let sal_ir;

let salario_bruto = 1570.0;

if (salario_bruto <= 1556.94) {
  sal_inss = salario_bruto * (8/100);
}

else if (salario_bruto <= 2594.92) {
  sal_inss = salario_bruto * (9/100);
}

 else if (salario_bruto <= 5189.82) {
  sal_inss = salario_bruto * (11/100);
} 
else {
  sal_inss = 570.88;
}

let salario_d_inss = salario_bruto - sal_inss;

if (salario_d_inss <= 1903.98) {
  sal_ir = 0;
} 

else if (salario_d_inss <= 2826.65) {
  sal_ir = (salario_d_inss * 0.075) - 142.80;
} 

else if (ssalario_d_inss <= 3751.05) {
  sal_ir = (salario_d_inss * 0.15) - 354.80;
} 

else if (salario_d_inss <= 4664.68) {
  sal_ir = (salario_d_inss * 0.225) - 636.13;
}

else {
  sal_ir = (salario_d_inss * 0.275) - 869.36;
};

let salario_liquido = salario_d_inss - sal_ir;

console.log('O salário que o trabalhador deve receber é de', salario_liquido,'reais.');