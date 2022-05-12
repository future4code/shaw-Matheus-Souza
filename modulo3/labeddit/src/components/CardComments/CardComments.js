import React from 'react'
import { MainContainer, Votos } from './styled'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'

const CardComments = (props) => {
  console.log(props.comment)
  return (
    <MainContainer>
        <div>
          <h2>{props.comment.username}</h2>
          <p>{props.comment.body}</p>
        </div>
        <Votos>
            <img src={up} alt='UpVote'/>
            {props.comment.voteSum === null ? 
            <p>0</p> : 
            <p>{props.comment.voteSum}</p>}      
            <img src={down} alt='DownVote'/>
        </Votos>
    </MainContainer>
  )
}

export default CardComments