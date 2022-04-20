import axios from 'axios'
import React, { useState,useEffect } from 'react'
import CardPerfil from '../../components/CardPerfil/CardPerfil'
import {MainContainer} from './styled'

function PagInicial() {
    const [mudaTela,setMudaTela] = useState(true)
    const [perfil, setPerfil] = useState({})

    const escolhePessoa = (id) =>{
        const body = {
          id: id,
          choice: true
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person',body).then(response => {
            setMudaTela(!setMudaTela);
          })
          .catch(err => {
            console.log(err);
          });
    }

    const pegaPerfil = () => {
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person")
        .then(response => {
          setPerfil(response.data.profile);
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    useEffect(() => {
      pegaPerfil()
    },[mudaTela])

  return (
      <MainContainer>
            <CardPerfil perfil={perfil}/>
            <div className='Botões'>
                <button onClick={pegaPerfil}>Deslike</button>
                <button onClick={() => escolhePessoa(perfil.id)}>Like</button>
            </div>
      </MainContainer>
  )
}

export default PagInicial