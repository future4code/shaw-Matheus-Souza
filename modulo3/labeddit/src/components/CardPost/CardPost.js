import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toPost } from '../../routes/coordinator';
import { Comentar, FooterCard, MainContainer, Votos } from './styled'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import upGreen from '../../assets/img/upGreen.png'
import downRed from '../../assets/img/downRed.png'
import chat from '../../assets/img/chat.png'
import { Votar } from '../../hooks/Requests';

const CardPost = (props) => {
  const navigate = useNavigate() 
  const params = useParams()
  const { votoUp,votoDown,votoDel } =  Votar ('posts',props.post.id);

  return (
    <MainContainer>
        <p>Enviado por: {props.post.username}</p>
        {params.id ? <h2>{props.post.title}</h2> : null} 
        <h3>{props.post.body}</h3>
        <FooterCard>
          <Votos>
            {props.post.userVote === 1 ? 
            <img src={upGreen} alt='UpVote' onClick={votoDel}/> 
            :
            <img src={up} alt='UpVote' onClick={votoUp}/>}
            {props.post.voteSum === null ? <p>0</p> : <p>{props.post.voteSum}</p>}      
            {props.post.userVote === -1 ? 
            <img src={downRed} alt='DownVote' onClick={votoDel}/> 
            :
            <img src={down} alt='DownVote' onClick={votoDown}/>}
          </Votos>
          <Comentar>
            {!params.id ?
              <img src={chat} alt='chat' onClick={()=> toPost(navigate,props.post.id)}/>
            : 
              <img src={chat} alt='chat'/>}  
            {props.post.commentCount === null ? 
            <p>0</p> : 
            <p>{props.post.commentCount}</p>}
          </Comentar>
        </FooterCard>
    </MainContainer>
  )
}

export default CardPost