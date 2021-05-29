import React from 'react';

class Name extends React.Component {
  render() {

    const { value, readForm } = this.props;

    return(      
      
      <div className="name">
        <label className="label">Nome:</label>
        <input name="name" className="input is-primary" type="text" placeholder="Digite seu nome" value={value.toUpperCase()} onChange={readForm} maxLength="40" required></input>
     </div>

    )
  }
}

export default Name;
