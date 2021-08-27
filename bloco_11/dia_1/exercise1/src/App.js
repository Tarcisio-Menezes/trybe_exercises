import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const list = ['Codar', 'Jogar FIFA', 'Ver o tricolor', 'Namorar', 'Tomar umas brejas'];

class App extends React.Component {
  render() {
    return (
    list.map((task) => Task(task))    
  );
  }
}

export default App;
