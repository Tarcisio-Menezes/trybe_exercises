import React from 'react';

class Type extends React.Component {
  
  render() {

    const { readForm } = this.props;

    return(
        <div className="control">
        <label className="label" >Tipo:</label>
        <label className="radio">
          <input type="radio" name="type" value={'apartment'} onChange={readForm} required />
          Apartamento
        </label>
        <label className="radio">
          <input type="radio" name="type" value={'house'} onChange={readForm} />
          Casa
        </label>
      </div>
    )
  }
}

export default Type;
