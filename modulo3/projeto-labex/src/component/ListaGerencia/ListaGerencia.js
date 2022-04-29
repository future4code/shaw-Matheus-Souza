import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PegaLista } from '../../customHooks/Requests'
import { abreDetalhes } from '../../routes/coordinator'
import { CardLista } from './style'

const ListaGerencia = () => {
    const viagens = PegaLista()
    const navegar = useNavigate()
   
    const listaGerenciavel = viagens.map((viagem)=>{
        return(
            <CardLista onClick={()=>abreDetalhes(navegar,`${viagem.id}`)}>
                <p><strong>Nome: </strong>{viagem.name}</p>
                <button> excluir </button>
            </CardLista>
        )
    })

  return (
    <div>
        {listaGerenciavel}
    </div>
  )
}

export default ListaGerencia