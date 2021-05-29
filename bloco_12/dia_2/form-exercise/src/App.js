import './App.css';
import React from 'react';
import Champs from './Champs';

class App extends React.Component {
  constructor() {
    super();

    this.loadForm = this.loadForm.bind(this);

    this.state = {
      champsPaulistao: '',
      triMundial: 'false',
    };


  }

loadForm(event) {
  const value = event.target.type ==='checkbox' ? event.target.checked : event.target.value;

  this.setState({
    [event.target.name]: value,
  });
}


  render() {

    return (
      <div className="App">

      <h1>Pesquisa maiores times de futebol do Brasil</h1>

      <label>Qual o melhor do Brasil?
      <br></br>

      <select id='best' name='times-select'>
        <option value='tricolor-paulista'>Tricolor do Morumbi</option>
        <option value='sao-paulo'>São Paulo</option>
        <option value='soberano'> São Paulão Campeão</option>
      </select>

      <br></br>

      <p>Quem foi o campeão paulista de 2021?</p>
      <br></br>
      <Champs value={this.state.champsPaulistao} loadForm={this.loadForm} />

      <br></br>
      <label>Qual o único clube brasileiro tri campeão mundial?
      <br></br>
      <input type='checkbox' name='triMundial'value={this.state.triMundial} onChange={this.loadForm}></input> Tricolor
      </label>

      </label>
      </div>
    );
  }

  
}

export default App;
