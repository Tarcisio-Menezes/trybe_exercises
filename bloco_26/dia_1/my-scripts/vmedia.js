const { questionFloat } = require('readline-sync');
const { vMedia } = require('./functions');

const distancia = questionFloat('Olá! Para iniciarmos diga a distancia percorrida em metros ');
const tempo = questionFloat('Estamos indo bem! Para finalizar, nos diga o tempo gasto para percorrer a distância informada ');
console.log('OK');
console.log(`Sua velocidade média é de ${vMedia(distancia, tempo)} m/s^2`);
