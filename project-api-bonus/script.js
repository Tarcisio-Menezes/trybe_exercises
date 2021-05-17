const createTrue = async (data) => {
  const olTrue = document.getElementsByClassName('trues')[0];
  const li = document.createElement('li');
  li.className = 'truesChuck';

  if(data === undefined) {
    const chuckProblem = document.getElementsByClassName('chuck-problem')[0];
    chuckProblem.style.display = 'flex';
    alert('Refresh the page');
  } else {
  li.innerText = data;
  olTrue.appendChild(li);
  }
}

const fetchTrue = async () => {
  const API_URL = `https://api.chucknorris.io/jokes/random?category=${document.getElementById('input').value}`;
 
  await fetch(API_URL)
  .then((results) => results.json())
  .then((data) => createTrue(data.value));
};

const buttonSearch = document.getElementById('search');
buttonSearch.addEventListener('click', fetchTrue);

const buttonClear = document.getElementById('clear');

const clear = () => {
  if(document.getElementsByClassName('truesChuck').length > 0) {
    document.getElementsByClassName('trues')[0].remove();
  }
}

buttonClear.addEventListener('click', clear);
