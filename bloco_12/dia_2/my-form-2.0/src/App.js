import './App.css';
import React from 'react';
import Name from './Name';
import Email from './Email';
import Cpf from './Cpf';
import End from './End';
import City from './City';

class App extends React.Component {

  constructor() {
    super();

    this.readForm = this.readForm.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      end: '',
      city: '',
    
    };
  }

  readForm(event) {
    const value = event.target.type ==='checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });

  }  

  render() {
    return (
      <div className="App">
  
      <h1 className="title">Cadastre seu currículo conosco</h1>

      <Name value={this.state.name} readForm={this.readForm} />
      <Email value={this.state.email} readForm={this.readForm}/>
      <Cpf value={this.state.cpf} readForm={this.readForm} />
      <End value={this.state.end} readForm={this.readForm}/>
      <City value={this.state.city} readForm={this.readForm}/>
        
      </div>
    );
  }

}

export default App;
