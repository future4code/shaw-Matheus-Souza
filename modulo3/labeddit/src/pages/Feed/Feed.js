import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPost from '../../components/CardPost/CardPost'
import { toHome } from '../../routes/coordinator'
import { MainContainer } from './style'
import { GlobalContext } from '../../global/GlobalContext'

const Feed = () => {
  const navigate = useNavigate()
  const token =localStorage.getItem("token");
  const {states, setter, requests} = useContext(GlobalContext)
  const listPost = states.listPost
  const setListPost = setter.setListPost

  const pegaPosts = () => {
      axios.get("https://labeddit.herokuapp.com/posts",{headers:{Authorization:token}})
        .then((response) => {
          setListPost(response.data)
          console.log(response.data)
        }).catch((error) => {
        });
  };

  useEffect(()=>{
    pegaPosts()
  },[])

  return (
    <MainContainer>
      <h1>Feed</h1>
      {listPost && listPost.map((post) => {
          return <CardPost key={post.id} post={post}/>;
      })}
      <button onClick={()=>toHome(navigate)}>home</button>
    </MainContainer>
  )
}

export default Feed