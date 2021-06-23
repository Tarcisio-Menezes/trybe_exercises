import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {

    return(
      <div>
        <nav className="navigator">
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        Sou a página de Contato
      </div>
    );
  }
}

export default Contact;
