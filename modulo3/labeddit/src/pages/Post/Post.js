import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'

const Post = () => {
  const navigate = useNavigate()
  return (
    <div>
      Post
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default Post