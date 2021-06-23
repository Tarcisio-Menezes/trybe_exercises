import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {

    return(
      <section>
        <nav className="navigator">
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        Eu sou a página inicial
      </section>
    );
  }
}

export default Home;
