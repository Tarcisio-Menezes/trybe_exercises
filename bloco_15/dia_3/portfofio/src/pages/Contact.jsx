import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";


class Contact extends React.Component {
  render() {

    return(
      <section className="classContact">
        <nav className="navigator">
          <Link to="/">Inicio</Link>
          <Link to="/works">Trabalhos</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        <div>
          <h1>Entre em contato!</h1>
          <section>
            <p> <BiMessageRounded /> tarcisioquim@gmail.com</p>
            <FaPhoneAlt /> 16 996314645
            <br /> <br />
            <a href="https://github.com/Tarcisio-Menezes" target="blank"><FaGithub /> GitHub</a>
            <br /> <br />
            <a href="https://www.linkedin.com/in/tarcísio-menezes/" target="blank"><FaLinkedinIn /> Linkedin</a>
          </section>
        </div>
      </section>
    );
  }
}

export default Contact;
