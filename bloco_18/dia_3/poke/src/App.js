import React, { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const handleMorePokemons = () => {
    setLimit(limit + 10);
    console.log(limit);
  };


  // Nesse caso, utilizamos o limit como segundo argumento no useEffect, 
  // pois dessa forma, ao clicar no botão, o estado será atualizado
  // e irá trazer mais dez pokemons da lista.

   useEffect(() => {
     const getPokemons = async () => {
      const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPokemons(results)
    }

    getPokemons();
  }, [limit]);

  // A sintaxe abaixo é análoga ao componentWillUnmount, para utilizá-la é necessário a chamada de uma callback dentro do useEffect.

  // useEffect(() => () => alert('unmount), [])

  return (
    <div>
      <h1>Trybe Go</h1>
      <button type="button" onClick={handleMorePokemons}>Buscar +10</button>
      <ul>
        {
          pokemons.map(({ name }) => <li key={name} >{name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;