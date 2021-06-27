import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {

    return(
      <section className="classHome">
        <nav className="navigator">
          <Link to="/">Inicio</Link>
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        <div>
          <h1>
            Sej@ bem vind@ a minha página!
          </h1>
          <h3>
            Tarcísio Menezes - Desenvolvedor Full-Stack
          </h3>
        </div>
      </section>
    );
  }
}

export default Home;
