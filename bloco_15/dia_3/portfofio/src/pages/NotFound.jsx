import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {

    return(
      <section>
        <nav className="navigator">
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        Sou a página não encontrada
      </section>
    );
  }
}

export default NotFound;
