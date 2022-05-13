import axios from 'axios'
import React, { useState } from 'react'
import CardPost from '../../components/CardPost/CardPost'
import { useNavigate, useParams } from 'react-router-dom'
import { GetRequest, useForm } from '../../hooks/Requests'
import { toHome } from '../../routes/coordinator'
import { MainContainer } from './style'

const Feed = () => {
  const [atualiza, setAtualiza] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const token =localStorage.getItem("token");
  const { formulario, onChange, limpaInputs } = useForm({ title: "", body: "" });
  const { listPost } = GetRequest(params.id,atualiza);

  const criaPosts = (event) => {
    event.preventDefault()
      axios.post("https://labeddit.herokuapp.com/posts",formulario,{headers:{Authorization:token}})
        .then((response) => {
          setAtualiza(!atualiza)
          limpaInputs()
        }).catch((error) => {
        });
  };

  return (
    <MainContainer>
      <h1>Feed</h1>
      <form onSubmit={criaPosts}> 
        <input
          name='title'
          placeholder='Titulo do Post'
          type='text'
          value={formulario.title}
          onChange={onChange}
          required
        />
        <textarea 
          name='body'
          placeholder='Escreva seu Post aqui.'
          type='text'
          value={formulario.body}
          onChange={onChange}
          required
        />
        <button>Postar</button>
      </form>
      {listPost && listPost.map((post) => {
          return <CardPost key={post.id} post={post} atualiza={atualiza} setAtualiza={setAtualiza}/>;
      })}
      <button onClick={()=>toHome(navigate)}>home</button>
    </MainContainer>
  )
}

export default Feed