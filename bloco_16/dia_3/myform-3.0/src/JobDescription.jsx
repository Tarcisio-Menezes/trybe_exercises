import React from 'react';

class JobDescription extends React.Component {

  render() {

    const { readForm, value } = this.props;

    return(
        
      <div>      
      <label className="label">Descrição do cargo:</label>
      <textarea name='jobDescription' value={value} onChange={readForm} className="textarea is-primary" placeholder="Descreva o cargo ocupado" required maxLength="500" cols="50" rows="3" ></textarea>
      </div>
    )
  }
}

export default JobDescription;