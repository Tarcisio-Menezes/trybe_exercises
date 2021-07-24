import React from 'react';

class SucessButton extends React.Component {

  render() {

    const { showData } = this.props;

    return(
 
      <div>      
        <div className="control">
        <button name="displayData" value={true} className="button is-primary" onClick={showData}>Enviar</button>
        </div>
      </div>
    )
  }
}

export default SucessButton;