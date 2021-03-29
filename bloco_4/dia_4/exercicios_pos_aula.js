let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
  };

console.log('Seja bem venda', info.personagem,'!');

info.recorrente = 'Sim';

console.log(info.personagem,'é recorrente?', info.recorrente,'.');

for (let key in info) {
    console.log(info[key]);
}

for (let key in info) {
    console.log(key);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  let recorrencia = '';

  if (info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
      recorrencia = 'Ambos recorrentes';
  }

  else if (info.recorrente === 'Não' && info2.recorrente === 'Não') {
      recorrencia = 'Não são recorrentes';
        
  }

  else if (info.recorrente === 'Sim' && info2.recorrente === 'Não') {
      recorrencia = 'Apenas', info.personagem,'é recorrente!';
  }

  else {
      recorrencia = 'Apenas', info2.personagem,'é recorrente!';
  }

  console.log(info.personagem, 'e', info2.personagem, info.origem, 'e', info2.origem, info.nota, info2.nota, recorrencia,'.');