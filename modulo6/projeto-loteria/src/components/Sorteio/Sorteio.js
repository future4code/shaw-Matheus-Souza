import React from 'react'
import { MainContainer } from './styled'

const NumeroSorteado = (numero) => {
  return (
    <MainContainer>
        <p>{numero.numero}</p>
    </MainContainer>
  )
}

export default NumeroSorteado