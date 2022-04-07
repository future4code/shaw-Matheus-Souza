import React from 'react';
import styled from 'styled-components'

const ContainerPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    img{
        width:30px;
        margin: 0 5px;
    }
    p{
        margin: 0 5px;
    }
`

function CardPequeno(props) {
    return (
        <ContainerPequeno>
            <img src={ props.imagem } />
            <h4>{ props.nome }</h4>
            <p>{ props.descricao }</p>
        </ContainerPequeno>
    )
}

export default CardPequeno;