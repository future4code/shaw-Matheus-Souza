import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { voltarPag } from '../routes/coordinator'

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
    },[detalhes.candidates])
  return detalhes
}
export const decisao = (idViagem,idCandidato,escolha) => {
    const token = localStorage.getItem("token");
    const body = {"approve": escolha}
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/trips/${idViagem}/candidates/${idCandidato}/decide`,body,{headers:{auth:token}})
    .then(resposta =>{
      alert("Decisão registrada")
      console.log(resposta.data)
    }).catch(erro =>{
        console.log(erro)
        alert("Não foi possivel tomar a decisão")
    })
}
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
