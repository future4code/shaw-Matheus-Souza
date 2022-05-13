import React from 'react'
import { MainContainer, Votos } from './styled'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'

const CardComments = (props) => {
  // console.log(props.comment)

  const votoUp = () => {
    const token = localStorage.getItem("token");
    const body = {"direction": 1}
    axios.post(`https://labeddit.herokuapp.com/comments/${props.comment.id}/votes`,body,{headers:{Authorization:token}})
    .then(resposta =>{ 
      alert('foi')
      props.setAtualiza(!props.atualiza)
    })
    .catch(erro =>{ })
  }

  const votoDown = () => {
      const token = localStorage.getItem("token");
      const body = {"direction": -1}
      axios.put(`https://labeddit.herokuapp.com/comments/${props.comment.id}/votes`,body,{headers:{Authorization:token}})
      .then(resposta =>{ 
        alert('foi')
        props.setAtualiza(!props.atualiza)
      })
      .catch(erro =>{ })
  }

  return (
    <MainContainer>
        <div>
          <h2>{props.comment.username}</h2>
          <p>{props.comment.body}</p>
        </div>
        <Votos>
            <img src={up} alt='UpVote' onClick={votoUp}/>
            {props.comment.voteSum === null ? 
            <p>0</p> : 
            <p>{props.comment.voteSum}</p>}      
            <img src={down} alt='DownVote' onClick={votoDown}/>
        </Votos>
    </MainContainer>
  )
}

export default CardComments