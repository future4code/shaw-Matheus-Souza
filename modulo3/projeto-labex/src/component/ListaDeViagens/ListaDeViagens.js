import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {CardViagem, MainContainer, ListContainer} from './style'
import { abreInscrição } from '../../routes/coordinator'
import planeta from '../../img/planeta.png'

const ListaDeViagens = () => {
    const [viagens,setViagens] = useState([])
    const navegar = useNavigate()

    const pegaLista = ()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips")
        .then(resposta =>{
            setViagens(resposta.data.trips)
            console.log(resposta.data.trips)
        }).catch(erro =>{
            console.log(erro)
        })
    }

    const cardsViagens = viagens.map((viagem)=>{
        return(
            <CardViagem>
                <p><strong>Nome: </strong>{viagem.name}</p>
                <p><strong>Descrição: </strong>{viagem.description}</p>
                <p><strong>Planeta: </strong>{viagem.planet}</p>
                <p><strong>Duração: </strong>{viagem.durationInDays}</p>
                <p><strong>Data: </strong>{viagem.date}</p>
            </CardViagem>
        )
    })

    useEffect(()=>{
        pegaLista()
    },[])

  return (
    <MainContainer>
        <img src={planeta} onClick={()=>abreInscrição(navegar,"inscricao")}/>
        <ListContainer>
            {cardsViagens}
        </ListContainer>
    </MainContainer>
  )
}

export default ListaDeViagens