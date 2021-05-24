import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const list = ['Codar', 'Jogar FIFA', 'Ver o tricolor', 'Namorar', 'Tomar umas brejas'];

function App() {
  return (
    list.map((task) => Task(task))    
  );
}

export default App;
