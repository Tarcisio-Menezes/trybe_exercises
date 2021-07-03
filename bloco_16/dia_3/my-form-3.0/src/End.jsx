import React from 'react';

class End extends React.Component {
 
  render() {

    const { value, readForm, validEnd } = this.props;
     
    return(
        <div className="end">
          
          <label className="label">Endereço:</label>
          <input
            name="end"
            className="input is-primary"
            type="text"
            placeholder="Digite seu Endereço"
            value={ value }
            onChange={ readForm }
            onBlur={ validEnd }
            maxLength="200"
            required>
          </input>        

        </div>
    )
  }
}

export default End;
