import React from 'react';
import Nav from '../components/Nav';
import '../css/About.css'

function About() {
  return (
    <div>
      <Nav />
      <h2>
        Se você gostou do projeto, me ajude a mantê-lo!
        Entre em contato por:
      </h2>
      <br />
        <a 
          href="https://github.com/Tarcisio-Menezes"
          target="_blank" rel="noreferrer"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/tarc%C3%ADsio-menezes/"
          target="_blank" rel="noreferrer"
        > 
          Linkedin 
        </a>
      <br />
      <h2> Agradecimento ao site: </h2> 
      <a 
        href="https://rickandmortyapi.com/"
        target="_blank" rel="noreferrer"
      > 
        rickandmortyapi
      </a>
    </div>
  );
}

export default About;