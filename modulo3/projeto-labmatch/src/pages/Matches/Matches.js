import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import GroupRemoveRoundedIcon from '@mui/icons-material/GroupRemoveRounded';
import {MainContainer, Lista} from './styled'

function Matches() {
    const [matches,setMatches] =useState([])

    const pegaMatch = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-souza/matches").then(response => {
            setMatches(response.data.matches);
          }).catch(err => {
            console.log(err);
          });
    }

    const limpaMatchs =() => {
      axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-souza/clear").then(response => {
          setMatches([]);
        }).catch(err => {
          console.log(err);
        });
    }

    const listaMatches = matches.map((perfil) =>{
        return(
            <div className='match' back={perfil.photo}>
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
        <Lista>
          {listaMatches}
        </Lista>
        <Button 
          onClick={limpaMatchs} 
          size="small" 
          variant="outlined" 
          startIcon={<GroupRemoveRoundedIcon/>}
        > Limpar Matches
        </Button>
    </MainContainer>
  )
}

export default Matches