import React from 'react';

class Office extends React.Component {

  render() {

    const { readForm, value, officeAlert } = this.props;

    return(
        
      <div>      
        <label className="label">Cargo pretendido:</label>
        <textarea
          name='office'
          value={ value }
          onChange={ readForm }
          className="textarea is-primary"
          placeholder="Digite o cargo pretendido"
          required
          maxLength="40"
          cols="50"
          rows="1"
          onMouseEnter={ officeAlert }>
        </textarea>
      </div>
    )
  }
}

export default Office;