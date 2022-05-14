import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import CardPost from '../../components/CardPost/CardPost'
import { useNavigate, useParams } from 'react-router-dom'
import { GetRequest, useForm } from '../../hooks/Requests'
import { toHome } from '../../routes/coordinator'
import { Main, MainContainer } from './style'
import { GlobalContext } from '../../global/GlobalContext'
import Header from '../../components/Header/Header'

const Feed = () => {
  const navigate = useNavigate()
  const params = useParams()
  const token =localStorage.getItem("token");
  const { formulario, onChange, limpaInputs } = useForm({ title: "", body: "" });
  const {states, setter}  = useContext(GlobalContext);
  const atualiza = states.atualiza
  const setAtualiza = setter.setAtualiza
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

  useEffect(()=>{
    if(token === null){
      toHome(navigate)
    }
  },[])

  return (
    <MainContainer>
      <Header/>
      <Main>
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
        {listPost && listPost.length >0 ? listPost.map((post) => {
            return <CardPost key={post.id} post={post} atualiza={atualiza} setAtualiza={setAtualiza}/>;
        }) : <h1>Carregando Posts</h1>}
      </Main>
    </MainContainer>
  )
}

export default Feed