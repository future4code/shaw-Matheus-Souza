import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardComments from '../../components/CardComments/CardComments'
import CardPost from '../../components/CardPost/CardPost'
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../global/GlobalContext'
import { GetRequest, useForm } from '../../hooks/Requests'
import { toFeed, toHome } from '../../routes/coordinator'
import { Main, MainContainer } from './style'
import back from '../../assets/img/back.png'

const Post = () => {
  const navigate = useNavigate()
  const params = useParams()
  const token =localStorage.getItem("token");
  const { formulario, onChange, limpaInputs } = useForm({ body: "" });
  const  {states, setter}  = useContext(GlobalContext);
  const atualiza = states.atualiza
  const setAtualiza = setter.setAtualiza
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

  useEffect(()=>{
    if(token === null){
      toHome(navigate)
    }
  },[])
  
  return (
    <MainContainer>
      <Header/>
      <Main>
        <img className='volta' src={back} alt='Voltar' onClick={()=>toFeed(navigate)}/>
        {listPost && listPost.length > 0 ? 
          <CardPost post={postagem[0]} atualiza={atualiza} setAtualiza={setAtualiza}/> : <h2>Carregando Post</h2>}
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
          <h2>Ainda não há comentários!</h2>}
      </Main>
    </MainContainer>
  )
}

export default Post