import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "../styles.css";


const PokeCard = (props) => {
  const [pokemon,setPokemon] = useState("");

  useEffect(() => {
    pegaPokemon(props.pokemon);
  },[props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => {
      setPokemon( response.data );
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  console.log(pokemon);
  return (
    <div className="CardPokemon">
      <p><strong>Nome: </strong>{pokemon.name}</p>
      <p><strong>Peso: </strong>{pokemon.weight} Kg</p>
      {pokemon.types && <p><strong>Tipo: </strong>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;