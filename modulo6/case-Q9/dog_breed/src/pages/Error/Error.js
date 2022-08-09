import React from 'react'
import { MainContainer } from './styled'
import sadDog from '../../assets/cheem.png'

const Error = () => {
  return (
    <MainContainer>
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <img src={sadDog}/>
    </MainContainer>
  )
}

export default Error