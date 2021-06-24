import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {

    return(
      <section>
        <nav className="navigator">
          <Link to="/">Inicio</Link>
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        <h1>Sou a página Sobre</h1>
      </section>
    );
  }
}

export default About;
