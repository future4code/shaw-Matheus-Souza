import React from 'react'
import { MainContainer, Votos } from './styled'
import { Votar } from '../../hooks/Requests'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import upGreen from '../../assets/img/upGreen.png'
import downRed from '../../assets/img/downRed.png'

const CardComments = (props) => {
  const { votoUp,votoDown,votoDel } =  Votar ('comments',props.comment.id);

  return (
    <MainContainer>
        <div>
          <h2>{props.comment.username}</h2>
          <p>{props.comment.body}</p>
        </div>
        <Votos>
            {props.comment.userVote === 1 ? 
            <img src={upGreen} alt='UpVote' onClick={votoDel}/> 
            :
            <img src={up} alt='UpVote' onClick={votoUp}/>}
            {props.comment.voteSum === null ? <p>0</p> : <p>{props.comment.voteSum}</p>}  
            {props.comment.userVote === -1 ? 
            <img src={downRed} alt='DownVote' onClick={votoDel}/> 
            :
            <img src={down} alt='DownVote' onClick={votoDown}/>}    
        </Votos>
    </MainContainer>
  )
}

export default CardComments