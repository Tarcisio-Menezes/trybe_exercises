function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //vamos de baby steps

  //Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function daysOfMonth() {
    let ulDays = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index]; 
      let itemDay = document.createElement('li');

      if (day === 24 || day === 31) {
        itemDay.className = 'day holiday';
        itemDay.innerHTML = day; //transforma em elemento HTML que pode ser adicionado a um pai
        ulDays.appendChild(itemDay);
      }

      else if (day === 25) {
        itemDay.className = 'day holiday friday';
        itemDay.innerHTML = day;
        ulDays.appendChild(itemDay);
      }

      else if (day === 4 || day === 11 || day == 18) {
        itemDay.className = 'day friday';
        itemDay.innerHTML = day;
        ulDays.appendChild(itemDay);
      }

      else {
          itemDay.className = 'day';
          itemDay.innerHTML = day;
          ulDays.appendChild(itemDay);
      }

}
}

daysOfMonth();


