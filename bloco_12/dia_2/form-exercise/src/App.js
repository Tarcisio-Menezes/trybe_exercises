import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.loadForm = this.loadForm.bind(this);

    this.state = {
      champsPaulistao: '',
    };


  }

loadForm(event) {
  this.setState({
    champsPaulistao: event.target.value,
  });
}


  render() {

    return (
      <div className="App">

      <h1>Pesquisa maiores times de futebol do Brasil</h1>

      <label>Qual o melhor do Brasil?
      <br></br>

      <select id='best' name='times'>
        <option value='tricolor-paulista'>Tricolor do Morumbi</option>
        <option value='sao-paulo'>São Paulo</option>
        <option value='soberano'> São Paulão Campeão</option>
      </select>

      <br></br>
      <br></br>

      </label> Quem foi o campeão paulista de 2021?
      <br></br>
       <textarea name='champs' rows='1' cols='25' placeholder='digite São Paulo FC aqui' value={this.state.champsPaulistao} onChange={this.loadForm}>
       </textarea> 

      <label>

      </label>
      </div>
    );
  }

  
}

export default App;
