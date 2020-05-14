import React, {useState, useEffect} from 'react';
//import { render } from '@testing-library/react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [render, setRender] = useState(0);
  
      useEffect(() =>{
        console.log('API Call')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    
    }, []);

    const refreshPage = () =>{
        setRender(render + 1);
    };

        
    return (
        <div>
            <button onClick={refreshPage}>Click to reload from API</button>

            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return(
                    <div key={index}>{poke.name}</div>
                )
            })}
        </div>
    );
}

export default Pokemon;