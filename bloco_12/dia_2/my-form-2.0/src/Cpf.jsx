import React from 'react';

class Cpf extends React.Component {

  render() {

    const { value, readForm } = this.props;

    return(
        <div className="cpf">
          
        <label className="label">CPF:</label>
        <input name="cpf" className="input is-primary" type="text" placeholder="Digite seu CPF" value={value} onChange={readForm} maxLength="11" required></input>

        </div>
    )
  }
}

export default Cpf;
