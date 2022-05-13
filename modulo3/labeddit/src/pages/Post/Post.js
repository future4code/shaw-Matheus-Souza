import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardComments from '../../components/CardComments/CardComments'
import CardPost from '../../components/CardPost/CardPost'
import { GetRequest, useForm } from '../../hooks/Requests'
import { toFeed } from '../../routes/coordinator'
import { MainContainer } from './style'

const Post = () => {
  const [atualiza, setAtualiza] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const token =localStorage.getItem("token");
  const { formulario, onChange, limpaInputs } = useForm({ body: "" });
  const { listPost, comments } = GetRequest(params.id,atualiza);

  const criaComments = (event) => {
    event.preventDefault()
    axios.post(`https://labeddit.herokuapp.com/posts/${params.id}/comments`, formulario,{headers:{Authorization:token}})
    .then((response) => {
      setAtualiza(!atualiza)
      limpaInputs()
    }).catch((error) => { });
  };

  const postagem = listPost.filter((post)=>{
    return post.id === params.id
  })
  
  return (
    <MainContainer>
      <h1>Post</h1>
      {listPost && listPost.length > 0 ? <CardPost post={postagem[0]}/> : null}
      <form onSubmit={criaComments}> 
        <textarea 
          name='body'
          placeholder='Deixe seu comentário.'
          type='text'
          value={formulario.body}
          onChange={onChange}
          required
        />
        <button>Comentar</button>
      </form>
      {comments.length >0 ?  comments.map((comment) => {
          return <CardComments key={comment.id} comment={comment} atualiza={atualiza} setAtualiza={setAtualiza}/>;
      }) :
      <h3>Ainda não há comentários!</h3>}
      <button onClick={()=>toFeed(navigate)}>Voltar</button>
    </MainContainer>
  )
}

export default Post