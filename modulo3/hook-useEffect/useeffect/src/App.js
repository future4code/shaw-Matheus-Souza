import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./styles.css";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const pegaLista = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  useEffect(() => {
    pegaLista()
  },[]);

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <div className="App">
      <select className="Opçoes" onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return(
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  );
}

export default App;
