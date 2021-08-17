import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import '../css/Home.css';

function Home() {

  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPersons, setNewPersons] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

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
    const getNewPersons = async () => {
     const endpoint = `https://rickandmortyapi.com/api/character/?page=${newPersons}`;
     const { results } = await fetch(endpoint).then((data) => data.json());
     setPersons(results)
    }

    getNewPersons() && setLoading(false);
  }, [newPersons]);

  useEffect(() => {
    const getNamePersons = async () => {
      const endpoint = `https://rickandmortyapi.com/api/character/?name=${searchName}&status=${searchStatus}`;
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPersons(results)
    }

    getNamePersons() && setLoading(false);
  }, [searchName, searchStatus]);

  function listConditinal() {
    if(loading || !persons) {
      return <p>Carregando...</p>
    } return (
      <ul>
      {
          persons.map((item, index) => <li key={index}> 
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
      <h3> Você pode ver mais personagens alterando os filtros</h3>
      <section>
        <input
          type="number"
          placeholder="Page number"
          onChange={ (e) => setNewPersons(e.target.value) }
          min="0"
        >
        </input>
        <input
          type="text"
          placeholder="Nome do personagem"
          onChange={ (e) => setSearchName((e.target.value).toLowerCase()) }
        >
        </input>
        <select
          onChange={ (e) => setSearchStatus(e.target.value) }
        >
          <option value="alive"> alive </option>
          <option value="dead"> dead </option>
          <option value="unknow"> unknow </option>
        </select>
      </section>
      { listConditinal() }
    </div>
  );
}

export default Home;
