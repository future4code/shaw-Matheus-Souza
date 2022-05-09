import React from 'react'
import { MainContainer,Conteudo } from './styled';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';

function Loading() {
  return (
    <MainContainer>
        <Conteudo>
            <LocalFireDepartmentRoundedIcon size="large" color='error'/>    
        </Conteudo>
    </MainContainer>
  )
}

export default Loading