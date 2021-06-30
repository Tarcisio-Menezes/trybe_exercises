import React from 'react';

class DisplayData extends React.Component {

  render() {
    const { state } = this.props;

    return (

      <div>
        <h2>Informações pessoais</h2>
        <p>Nome: {state.name}</p>
        <p>E-mail: {state.email}</p>
        <p>CPF: {state.cpf}</p>
        <p>Endereço: {state.end}</p>
        <p>Cidade: {state.city}</p>
        <p>Estado: {state.state}</p>
        <p>Tipo: {state.type}</p>

        <h2>Informações das últimas experiências</h2>
        <p>Resumo do currículo: {state.jobs}</p>
        <p>Cargo: {state.office}</p>
        <p>Descrição do cargo: {state.jobDescription}</p>
      </div>
    )
  }
}

export default DisplayData;