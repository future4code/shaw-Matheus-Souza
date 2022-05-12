import axios from 'axios'
import { useEffect, useState } from 'react'

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
  const token =localStorage.getItem("token");
  
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