import React from 'react';

class State extends React.Component {

  render() {

    const { readForm } = this.props;
    const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

    return(
      <div>

        <div className="select is-primary">
          <select
            name="state"
            onChange={ readForm }
            required
            >
              <option>Selecione o seu estado</option>
              {states.map((state, index) => <option key={ index } value={ state }> { state }</option>)}            
          </select>
        </div>

      </div> 
    );
  };
}

export default State;
