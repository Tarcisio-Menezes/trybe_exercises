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