import axios from 'axios'
import React, { useState,useEffect } from 'react'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import CardPerfil from '../../components/CardPerfil/CardPerfil'
import {MainContainer} from './styled'
import Loading from '../../components/Loading.js/Loading';

function PagInicial() {
  const [mudaTela,setMudaTela] = useState(true)
  const [perfil, setPerfil] = useState({})
  const [animacao,setAnimacao] = useState('')

  const escolhePessoa = (id) =>{
        const body = {
          id: id,
          choice: true
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-souza/choose-person',body).then(response => { 
            setAnimacao('')  
          })
          .catch(err => {
            console.log(err);
          });
    }
    const pegaPerfil = () => {
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-souza/person")
        .then(response => {
          setPerfil(response.data.profile);
          setAnimacao('')  
        })
        .catch(err => {
          console.log(err);
        });
    }
    const deslike = () => {
      setAnimacao('caiEsquerda')
      setMudaTela(!mudaTela)
      pegaPerfil()
    }
    const like = (id) => {
      setAnimacao('caiDireita')
      setMudaTela(!mudaTela)
      escolhePessoa(id)
    }
    useEffect(() => {
      pegaPerfil();
    },[mudaTela])

  return (
      <MainContainer>
            <Loading></Loading>
            <CardPerfil perfil={perfil} animacao={animacao}/>
            <div className='Botões'>
                <button 
                  className='deslike' 
                  onClick={deslike}
                >
                  <ThumbDownAltRoundedIcon color="error" size="large"/>
                </button>
                <button 
                  className='like' 
                  onClick={() => like(perfil.id)}
                >
                  <ThumbUpRoundedIcon color="success" size="large"/>
                </button>
            </div>
      </MainContainer>
  )
}

export default PagInicial