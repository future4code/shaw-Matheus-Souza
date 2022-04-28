import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListaGerencia = () => {
    const [viagens,setViagens] = useState([])

    const pegaLista = ()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips")
        .then(resposta =>{
            setViagens(resposta.data.trips)
            console.log(resposta.data.trips)
        }).catch(erro =>{
            console.log(erro)
        })
    }
    const listaGerenciavel = viagens.map((viagem)=>{
        return(
            <div>
                <p><strong>Nome: </strong>{viagem.name}</p>
                <button> excluir </button>
            </div>
        )
    })

    useEffect(()=>{
        pegaLista()
    },[])

  return (
    <div>
        {listaGerenciavel}
    </div>
  )
}

export default ListaGerencia