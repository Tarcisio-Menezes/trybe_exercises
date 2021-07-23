import React, { useEffect, useState } from 'react';
import useAbility from './hooks/useAbility';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const [abilities, setPokeUrl] = useAbility();

  const handleMorePokemons = () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    const getPokemons = async () => {
     const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
     const { results } = await fetch(endpoint).then((data) => data.json());
     setPokemons(results)
    }

    getPokemons();
  }, [limit]);
 
  return (
    <div>
      <h1>Trybe Go</h1>
      <p>{ abilities.toString() }</p>
      <button type="button" onClick={handleMorePokemons}>Buscar +10</button>
      <ul>
        {
          pokemons.map(({ name, url }) => <li key={name} onClick={() => setPokeUrl(url)} >{name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
