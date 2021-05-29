import React from 'react';

class City extends React.Component {

  render() {

    const { value, readForm } = this.props;

    return(
        <div className="city">
          
        <label className="label">Cidade:</label>
        <input name="city" className="input is-primary" type="text" placeholder="Digite sua cidade" value={value} onChange={readForm} maxLength="28" required></input>

        </div>
    )
  }
}

export default City;
