import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Episode.css';

function Episode() {

  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPersons = async () => {
     const endpoint = `https://rickandmortyapi.com/api/episode`;
     const { results } = await fetch(endpoint).then((data) => data.json());
     setEpisodes(results)
    }

    getPersons() && setLoading(false);
  }, []);

  console.log(episodes)

  function listConditinal() {
    if(loading || !episodes) {
      return <p>Carregando...</p>
    } return (
      <ul>
      {
        episodes.map((item, index) => <li key={index}> 
          <p>{item.name}</p> 
          <p>Date: {item.air_date} </p>
          <p>Episódio: {item.episode}</p>
          </li>)
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
      <h1>Episódios</h1>
      { listConditinal() }
    </div>
  );
}

export default Episode;