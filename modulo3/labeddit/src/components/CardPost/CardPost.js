import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toPost } from '../../routes/coordinator';
import { Comentar, FooterCard, MainContainer, Votos } from './styled'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import chat from '../../assets/img/chat.png'

const CardPost = (props) => {
  const navigate = useNavigate() 
  const params = useParams()

  // console.log(comentarios)
  // console.log(comments)

  return (
    <MainContainer>
        <p>Enviado por: <strong>{props.post.username}</strong></p>
        <h3>{props.post.body}</h3>
        <FooterCard>
          <Votos>
            <img src={up} alt='UpVote'/>
            {props.post.voteSum === null ? 
            <p>0</p> : 
            <p>{props.post.voteSum}</p>}      
            <img src={down} alt='DownVote'/>
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