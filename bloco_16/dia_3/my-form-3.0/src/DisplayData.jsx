import React from 'react';
import { connect } from 'react-redux';

class DisplayData extends React.Component {

  render() {
    const { registers } = this.props;

    return (

      <div>
        {registers.map((register, index) => {
            return (
              <div key={register.email}>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {register.name}</p>
                <p>Email: {register.email}</p>
                <p>CPF: {register.cpf}</p>
                <p>Cidade: {register.city}</p>
                <p>Endereço: {register.end}</p>
                <p>Estado: {register.state}</p>
                <p>Tipo: {register.type}</p>
                <p>Último emprego: {register.lastJob}</p>
                <p>Descrição: {register.jobDescription}</p>
                <p>Cargo pretendido: {register.office}</p>
              </div>
            );
        })} 
       </div>
    )
  }
}

const mapStateToProps = state => ({
  registers: state.formReducer
});

export default connect(mapStateToProps)(DisplayData);
