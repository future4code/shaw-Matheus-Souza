import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {MainContainer} from './styled'

function Matches() {
    const [matches,setMatches] =useState([])

    const pegaMatch = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches")
          .then(response => {
            setMatches(response.data.matches);
          })
          .catch(err => {
            console.log(err);
          });
    }

    const listaMatches = matches.map((perfil) =>{
        return(
            <div className='match'>
                <img src={perfil.photo} alt='foto de perfil'></img>
                <p>{perfil.name}</p>
            </div>
        )
    })

    useEffect(() =>{
        pegaMatch()
    }, [])

  return (
    <MainContainer>
        {listaMatches}
    </MainContainer>
  )
}

export default Matches