import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toPost } from '../../routes/coordinator';
import { MainContainer } from './styled'

const CardPost = (props) => { 
    const navigate = useNavigate() 
    const params = useParams()

  return (
    <MainContainer>
        <h2>{props.post.username}</h2>
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
        {!params.id ? 
        <button onClick={()=> toPost(navigate,props.post.id)}>Comentar</button>
         : <button>Comentar</button>}
        
    </MainContainer>
  )
}

export default CardPost