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