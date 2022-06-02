import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../global/GlobalContext';

const token =localStorage.getItem("token");

export const useForm = (estadoInicial) => {
  const [formulario, setForm] = useState(estadoInicial);
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formulario, [name]: value });
  };
  const limpaInputs = () => {
    setForm(estadoInicial);
  };
  return { formulario, onChange, limpaInputs };
}

export const GetRequest = (id,atualiza) => {
  const [listPost,setListPost] = useState([])
  const [comments,setComments] = useState([])
  
  const pegaPosts = () => {
    axios.get("https://labeddit.herokuapp.com/posts",{headers:{Authorization:token}})
    .then((response) => {
        setListPost(response.data)
    }).catch((error) => {
    });
  };

  const pegaComments = () => {
    if(id !== ''){
      axios.get(`https://labeddit.herokuapp.com/posts/${id}/comments`,{headers:{Authorization:token}})
       .then((response) => {
         setComments(response.data)
       }).catch((error) => {
     });
    }
  }
  useEffect(()=>{
    pegaPosts()
    pegaComments()
  },[atualiza])
  return{listPost, comments}
}

export const Votar = (page,id) =>{
  const  {states, setter}  = useContext(GlobalContext);
  const atualiza = states.atualiza
  const setAtualiza = setter.setAtualiza

  const votoUp = () => {
    const body = {"direction": 1}
    axios.post(`https://labeddit.herokuapp.com/${page}/${id}/votes`,body,{headers:{Authorization:token}})
    .then(resposta =>{ setAtualiza(!atualiza) })
    .catch(erro =>{ })
  }

  const votoDown = () => {
      const body = {"direction": -1}
      axios.put(`https://labeddit.herokuapp.com/${page}/${id}/votes`,body,{headers:{Authorization:token}})
      .then(resposta =>{ setAtualiza(!atualiza) })
      .catch(erro =>{ })
  }

  const votoDel = () => {
      axios.delete(`https://labeddit.herokuapp.com/${page}/${id}/votes`,{headers:{Authorization:token}})
      .then(resposta =>{ setAtualiza(!atualiza) })
      .catch(erro =>{ })
  }
  return{votoUp,votoDown,votoDel}
}