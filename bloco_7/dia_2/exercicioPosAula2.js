const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  const addTurno = () => {
    lesson2.turno = 'manhã';
  }

  addTurno();

  //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const listKeys = (object) => {
    const keys = Object.keys(object);
    return keys;
  }

  listKeys(lesson2)

  //Crie uma função para mostrar o tamanho de um objeto
  const objectSize = (object) => {
    const keys = Object.keys(object);
    const size = keys.length;
    return `O objeto tem ${size} chaves`;
  }

  objectSize(lesson2);

  //Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  const valuesObject = (object) => {
    const values = Object.values(object);
    return values;
  }

  valuesObject(lesson2);

  //Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
  const agrup = () => {
    const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
    return allLessons;
  }

  agrup();

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberStudents = () => {
  const students1 = lesson1.numeroEstudantes;
  const students2 = lesson2.numeroEstudantes;
  const students3 = lesson3.numeroEstudantes;
  const allStudents = Object.assign({}, {students1, students2, students3}); 
  const values = Object.values(allStudents);
  let sum = 0;
  for (index in values) {
    sum = sum + values[index];
  }
  return sum;
}

numberStudents();

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const searchValue = (object, position) => {
  const values = Object.values(object);
  return values[position];
}

searchValue(lesson1, 0);

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const existence = (object, key, value) => {
  const keysValues = Object.entries(object);
  let exist = false;
  for (index in keysValues) {
    if (keysValues[index][0] === key && keysValues[index][1] === value) {
      exist = true;
    }
  }
  return exist;
}

console.log(existence(lesson3, 'turno', 'noite'));
