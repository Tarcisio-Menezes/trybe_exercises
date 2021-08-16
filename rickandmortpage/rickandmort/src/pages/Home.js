import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import '../css/Home.css';

function Home() {

  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPersons, setNewPersons] = useState([]);

  useEffect(() => {
    const getPersons = async () => {
     const endpoint = `https://rickandmortyapi.com/api/character`;
     const { results } = await fetch(endpoint).then((data) => data.json());
     setPersons(results)
    }

    getPersons() && setLoading(false);
  }, []);

  // console.log(persons);

  useEffect(() => {
    const getPersons = async () => {
     const endpoint = `https://rickandmortyapi.com/api/character/?page=${newPersons}`;
     const { results } = await fetch(endpoint).then((data) => data.json());
     setPersons(results)
    }

    getPersons() && setLoading(false);
  }, [newPersons]);

  function listConditinal() {
    if(loading || !persons) {
      return <p>Carregando...</p>
    } return (
      <ul>
      {
        persons ? persons.map((item, index) => <li key={index}> 
          <img src={item.image} alt={item.name} width="300px"/> 
          <p>{item.name}</p>
          <p>Espécie: {item.species} </p>
          <p>Status: {item.status}</p>
          <p>Localização: {item.location.name}</p> 
          </li>) : newPersons.map((item, index) => <li key={index}> 
          <img src={item.image} alt={item.name} width="300px"/> 
          <p>{item.name}</p>
          <p>Espécie: {item.species} </p>
          <p>Status: {item.status}</p>
          <p>Localização: {item.location.name}</p> 
          </li>)
      }
    </ul>
    );
  }

  return (
    <div>
     <Nav />
      <h1>Bem vindo ao Rick and Mort fã page</h1>
      <h3> Você pode ver mais personagens alterando o valor numérico da página</h3>
      <input
      type="number"
      placeholder="Page number"
      onChange={ (e) => setNewPersons(e.target.value) }
      >
      </input>
      { listConditinal() }
    </div>
  );
}

export default Home;
