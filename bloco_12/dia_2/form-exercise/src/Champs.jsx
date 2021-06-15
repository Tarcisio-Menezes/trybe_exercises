import React from 'react';

class Champs extends React.Component {
  render() {

    const { loadForm, value } = this.props;

    return(
      <div>

       <textarea name='champsPaulistao' rows='1' cols='25' placeholder='digite São Paulo FC aqui' value={value} onChange={loadForm}>
       </textarea>       

      </div>
    )
  }
}

export default Champs;
