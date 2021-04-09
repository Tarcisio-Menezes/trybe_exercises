const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/


let container = document.getElementsByClassName('container')[0];

container.addEventListener('click', function(event) {
  classReset = document.getElementsByClassName('tech')[0];
  classReset.classList.remove('tech');
  event.target.classList.add ('tech');

});

input.addEventListener('input', function(event) {
  if (divUm.className === 'tech') {
    divUm.innerText = input.value;
  }

  if (divDois.className === 'tech') {
    divDois.innerText = input.value;
  }

  if (divTres.className === 'tech') {
    divTres.innerText = input.value;
  }

})

myWebpage.addEventListener('dblclick', function() {
  alert ('Você será redirecionado!');
  window.location.href = 'https://tarcisio-menezes.github.io/';
  
})

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'yellow';
})

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.