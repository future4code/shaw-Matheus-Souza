import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { Ativo, Inativo, MainContainer } from './styled'

const GenderButtons = (genero) => {
  const [seleciona,setSeleciona] = useState(false)
  const [listaGeneros,setListaGeneros] = useState([])
  const {states, setter} = useContext(GlobalContext)
  const idGeneros = states.genre_ids
  const setIdGeneros = setter.setGenre_ids
  
  const clickDesativo = (()=>{
    // if(idGeneros.length === 0){              //Codigo em emplementação
    //   setIdGeneros([`${genero.genero.id}`])
    // } else{
    //   const novalista = idGeneros.push(`,${genero.genero.id}`)
    //   console.log(novalista);
    //   setIdGeneros(novalista)
    // }
    setSeleciona(!seleciona)
  })

  const clickAtivo = (()=>{
    setSeleciona(!seleciona)
  })

  // console.log(idGeneros);
  return (
    <MainContainer seleciona={seleciona}>
        {seleciona === false ? 
        <Inativo onClick={clickDesativo}>{genero.genero.name}</Inativo>
        :
        <Ativo onClick={clickAtivo}>{genero.genero.name} ⓧ</Ativo>
        }       
    </MainContainer>
  )
}

export default GenderButtons