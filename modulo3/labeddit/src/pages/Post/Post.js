import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardComments from '../../components/CardComments/CardComments'
import CardPost from '../../components/CardPost/CardPost'
import { goBack } from '../../routes/coordinator'
import { MainContainer } from './style'
import { GlobalContext } from '../../global/GlobalContext'

const Post = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [comments,setComments] = useState([])
  const token =localStorage.getItem("token");
  const {states, setter, requests} = useContext(GlobalContext)
  const listPost = states.listPost
  const setListPost = setter.setListPost
  console.log(params.id)
  console.log(listPost)

  const pegaPosts = () => {
    axios.get("https://labeddit.herokuapp.com/posts",{headers:{Authorization:token}})
      .then((response) => {
        setListPost(response.data)
        console.log(response.data)
      }).catch((error) => {
      });
  };

  const pegaComments = () => {
    axios.get(`https://labeddit.herokuapp.com/posts/${params.id}/comments`,{headers:{Authorization:token}})
      .then((response) => {
        setComments(response.data)
        console.log(response.data)
      }).catch((error) => {
      });
  };

  const postagem = listPost.filter((post) =>{
    return post.id === params.id
  })

  console.log(postagem)

  useEffect(()=>{
    pegaPosts()
    pegaComments()
  },[])

  return (
    <MainContainer>
      <h1>Post</h1>
      {listPost && listPost.length > 0 ? <CardPost post={postagem[0]}/> : null}
      {comments && comments.map((comment) => {
          return <CardComments key={comment.id} comment={comment}/>;
      })}
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </MainContainer>
  )
}

export default Post