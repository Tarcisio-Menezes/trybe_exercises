import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  render() {

    return(
      <section className="classHome">
        <nav className="navigator">
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        <div>
          <h1>Bem vindo a minha página!</h1>
          <h3>Tarcísio Menezes - Desenvolvedor Full-Stack</h3>
        </div>
      </section>
    );
  }
}

export default Home;
