import React from 'react'
import { MainContainer } from './styled'

const GenderButtons = (genero) => {
    console.log(genero.genero.name)
  return (
    <MainContainer>
        <p>{genero.genero.name}</p>
    </MainContainer>
  )
}

export default GenderButtons