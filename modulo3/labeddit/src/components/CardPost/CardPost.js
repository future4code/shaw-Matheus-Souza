import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toPost } from '../../routes/coordinator';
import { Comentar, FooterCard, MainContainer, Votos } from './styled'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import chat from '../../assets/img/chat.png'
import axios from 'axios';

const CardPost = (props) => {
  const navigate = useNavigate() 
  const params = useParams()

  // console.log(comentarios)
  // console.log(comments)

  const votoUp = () => {
      const token = localStorage.getItem("token");
      const body = {"direction": 1}
      axios.post(`https://labeddit.herokuapp.com/posts/${props.post.id}/votes`,body,{headers:{Authorization:token}})
      .then(resposta =>{ 
        alert('foi')
        props.setAtualiza(!props.atualiza)
      })
      .catch(erro =>{ })
  }
  const votoDown = () => {
      const token = localStorage.getItem("token");
      const body = {"direction": -1}
      axios.put(`https://labeddit.herokuapp.com/posts/${props.post.id}/votes`,body,{headers:{Authorization:token}})
      .then(resposta =>{ 
        alert('foi')
        props.setAtualiza(!props.atualiza)
      })
      .catch(erro =>{ })
  }

  return (
    <MainContainer>
        <p>Enviado por: <strong>{props.post.username}</strong></p>
        {params.id ? <h2>{props.post.title}</h2> : null} 
        <h3>{props.post.body}</h3>
        <FooterCard>
          <Votos>
            <img src={up} alt='UpVote' onClick={votoUp}/>
            {props.post.voteSum === null ? 
            <p>0</p> : 
            <p>{props.post.voteSum}</p>}      
            <img src={down} alt='DownVote' onClick={votoDown}/>
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