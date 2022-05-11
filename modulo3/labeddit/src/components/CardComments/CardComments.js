import React from 'react'
import { MainContainer } from './styled'

const CardComments = (props) => {
  return (
    <MainContainer>
        <h2>{props.comment.username}</h2>
        <p>{props.comment.body}</p>
    </MainContainer>
  )
}

export default CardComments