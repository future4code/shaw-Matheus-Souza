import axios from 'axios'
import { useEffect, useState } from 'react'

export const PegaLista = () => {
  const [viagens,setViagens] = useState([])
  useEffect (()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips")
      .then(resposta =>{
        setViagens(resposta.data.trips)
        console.log(resposta.data.trips)
      }).catch(erro =>{
        console.log(erro)
      })
  },[])
  return viagens
}
export const PegaDetalhe = (idViagem) => {
  const [detalhes,setDetalhes] = useState({})
    useEffect (()=>{
        const token = localStorage.getItem("token");
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trip/${idViagem}`,{headers:{auth:token}})
        .then(resposta =>{
          setDetalhes(resposta.data.trip)
            console.log(resposta.data.trip)
        }).catch(erro =>{
            console.log(erro)
        })
    },[])
  return detalhes
}
export const decisao = (idViagem,idCandidato,escolha) => {
    const token = localStorage.getItem("token");
    const body = {"approve": escolha}
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips/${idViagem}/candidates/${idCandidato}/decide`,body,{headers:{auth:token}})
    .then(resposta =>{
      alert("Candidato aprovado")
      console.log(resposta.data)
    }).catch(erro =>{
        console.log(erro)
    })
}
export const useForm = (initialState) => {
  const [formulario, setForm] = useState(initialState);
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formulario, [name]: value });
  };
  const cleanFields = () => {
    setForm(initialState);
  };
  return { formulario, onChange, cleanFields };
}
