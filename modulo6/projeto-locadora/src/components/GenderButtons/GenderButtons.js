import React from 'react'
import { MainContainer } from './styled'

const GenderButtons = (genero) => {
  return (
    <MainContainer>
        <p>{genero.genero.name}</p>
    </MainContainer>
  )
}

export default GenderButtons