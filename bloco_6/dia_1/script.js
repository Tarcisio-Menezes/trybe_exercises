const estadosBr = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'];

const estado = document.getElementById('estado');

function generateEst() {
  for (let index = 0; index < estadosBr.length; index += 1) {
    let estadoSelect = document.createElement('option');
    estado.appendChild(estadoSelect);
    estadoSelect.innerHTML = estadosBr[index];
}
}
generateEst();

const submit = document.getElementById('submit');

function enviar(event) {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const eMail = document.getElementById('eMail').value;
  const cpf = document.getElementById('cpf').value;
  const end = document.getElementById('end').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  const resCurriculo = document.getElementById('resCurriculo').value;
  const cargo = document.getElementById('cargo').value;
  const descCargo = document.getElementById('descCargo').value;
  const data = document.getElementById('data').value
  const infos = document.getElementById('infos');

  
  infos.innerText = 'Nome: '+ fullName + ' E-mail: '+ eMail +' CPF: '+ cpf +' Endereço: ' + end +' Cidade: ' + cidade + ' Estado: '+ estado +' Resumo do currículo: ' + resCurriculo +' Cargo: ' + cargo +' Descrição do cargo: ' + descCargo + ' Data de início: '+data;  
}

submit.addEventListener('click', enviar);
