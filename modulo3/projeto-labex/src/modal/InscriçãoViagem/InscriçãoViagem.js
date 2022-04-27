import React from 'react'
import { Background, MainContainer } from './style'
import { useNavigate } from 'react-router-dom'
import { voltarPag } from '../../routes/coordinator'

const InscriçãoViagem = () => {
    const navegar = useNavigate()
  return (
    <Background>
        <MainContainer>
            <button onClick={()=>voltarPag(navegar)}>
                Voltar
            </button>
        </MainContainer>
    </Background>
  )
}

export default InscriçãoViagem