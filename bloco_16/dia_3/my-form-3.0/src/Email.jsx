import React from 'react';

class Email extends React.Component {

  render() {

    const { value, readForm } = this.props;

    return(

      <div className="email">
        <label className="label">E-mail:</label>
        <input
          name="email"
          value={ value }
          onChange={ readForm }
          className="input is-primary"
          type="email"
          placeholder="E-mail"
        />
      </div>

    );
  };
};

export default Email;
