import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toHome, toPost } from '../../routes/coordinator'

const Feed = () => {
  const navigate = useNavigate()
  return (
    <div>
      Feed
      <button onClick={()=>toPost(navigate)}>Post</button>
      <button onClick={()=>toHome(navigate)}>home</button>
    </div>
  )
}

export default Feed