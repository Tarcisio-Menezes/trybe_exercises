import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {

  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPersons = async () => {
     const endpoint = `https://rickandmortyapi.com/api/character`;
     const { results } = await fetch(endpoint).then((data) => data.json());
     setPersons(results)
    }

    getPersons() && setLoading(false);
  }, []);

  console.log(persons);

  function listConditinal() {
    if(loading || !persons) {
      return <p>Carregando...</p>
    } return (
      <ul>
      {
        (persons).map((item, index) => <li key={index}> <img src={item.image} alt={item.name} width="300px"/> <p>{item.name}</p> <p>Espécie: {item.species} </p> <p>Status: {item.status}</p> <p>Location: {item.location.name}</p> </li>)
      }
    </ul>
    );
  }

  return (
    <div>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/Episode">
          Episódios
        </Link>
        <Link to="/About">
          Sobre
        </Link>
      </nav>
      <h1>Bem vindo ao Rick and Mort fã page</h1>
      { listConditinal() }
    </div>
  );
}

export default Home;