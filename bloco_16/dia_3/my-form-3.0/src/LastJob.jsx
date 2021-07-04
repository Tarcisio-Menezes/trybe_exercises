import React from 'react';

class LastJob extends React.Component {

  render() {

    const { readForm, value } = this.props;

    return(
        
      <div>      
        <label className="label">Resumo do Currículo:</label>
        <textarea
          name='jobs'
          value={ value }
          onChange={ readForm }
          className="textarea is-primary"
          placeholder="Digite o resumo de seu currículo"
          required maxLength="1000"
          cols="50"
          rows="10">
        </textarea>
      </div>
    )
  }
}

export default LastJob;
