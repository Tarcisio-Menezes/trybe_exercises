let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log ('A jogadora', player.name, player.lastName,'foi considerada melhor do mundo!');

console.log ('A jogadora', player.name, player.lastName,'foi considerada melhor do mundo por', player.bestInTheWorld.length,'vezes!');

console.log ('A jogadora possui', player.medals.golden,'medalhas de ouro!');

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

//resultado = Saab Volvo BMW


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  //resultado = type Fiat
              //model 500
             //color white



let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index);
}

//resultado = 0 1 2 

//

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  } ;

  for (let index in names) {
      console.log ('Olá', names[index],'como vai você!?');
  }

  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in carro) {
      console.log (carro);
  }

