import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Content, Donnut, Graphics, Header, ItemTable, Maincontainer, Table, TableHead, TableRows } from './AppStyled';
import { baseURL } from './constants/baseURL';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function App() {
  const [formulario, setFormulario] = useState({ 
    first_name: "", 
    last_name: "", 
    participation: 0});
  const [listaUsers,setListaUsers] = useState([])
  const [atualiza,setAtualiza] = useState(false)
  const [participTotal,setParticipTotal] = useState(0)
  const [participantes,setParticipantes] = useState([])
  const [valores,setValores] = useState([])
  // console.log(valores);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const limpaInputs = () => {
    setFormulario({ first_name: "", last_name: "", participation: 0});
  };

  const registro = (event) => {
    event.preventDefault()
    if(Number.isInteger(Number(formulario.participation)) === false){
      alert("Insira um numero sem virgula ou ponto")
    }else{
      axios.post(`${baseURL}/user/register`,formulario)
        .then((resposta)=>{
          limpaInputs()
          setAtualiza(!atualiza)
          alert("Cadastro realizado!")
        }).catch((erro)=>{
          console.log(erro.response.data)
          if(erro.response.data === "Sobrenome já registrado"){
            alert("Sobrenome já registrado")
          }
        })
    }
  }

  const GetLista = () => {
    axios.get(`${baseURL}/user/getUsers`)
    .then((response) => {
        console.log(response.data);
        setListaUsers(response.data)
    })
    .catch((error) => {
        console.log(error);
    })
  }

  const SomaParticip = () => {
    
  }

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: participantes,
    hidden: true,
    datasets: [
      {
        label:'Participantes',
        data: valores,
        backgroundColor: [
          '#14FF00',
          '#FFD966',
          '#2986CC',
          '#8E7CC3',
          '#E06666',
        ],
        borderColor: [
          '#10cc00',
          '#b29747',
          '#1c5d8e',
          '#635688',
          '#9c4747',
        ],
        borderWidth: 2,
      },
    ],
  };

  useEffect (()=>{
    GetLista()
  },[atualiza])

  useEffect(()=>{
    let total = 0;
    listaUsers.forEach((item) => {
    total += Number(item.participation);
    setParticipTotal(total)});
    const valoresUsers = listaUsers.map((valor)=>{
      return valor.participation
    })
    setValores(valoresUsers)
    const particp = listaUsers.map((nome)=>{
      return nome.first_name
    })
    setParticipantes(particp)
  },[listaUsers])

  return (
    <Maincontainer>
      <Header>
        <form onSubmit={registro}>
          <input
            name='first_name'
            placeholder='Primeiro Nome'
            value={formulario.first_name}
            type='text'
            onChange={onChange}
            required>
          </input>
          <input
            name='last_name'
            placeholder='Segundo Nome'
            value={formulario.last_name}
            type='text'
            onChange={onChange}
            required>
          </input>
          <input
            name='participation'
            placeholder="Participação"
            value={Number(formulario.participation)}
            type="number"
            onChange={onChange}
            pattern='[0-9]+'
            title='Insira números inteiros, sem virgula ou ponto'
            required>
          </input>
          <button>
            ENVIAR
          </button>
        </form>
      </Header>
      <Content>
        <h1>DATA</h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        <Graphics>
          {listaUsers.length >0  ?
          <Table>
            <TableHead>
              <ItemTable> </ItemTable>
              <ItemTable>Primeiro nome</ItemTable>
              <ItemTable>Segundo nome</ItemTable>
              <ItemTable>Participação</ItemTable>
            </TableHead>
            {listaUsers.map((linha)=>{
              return <TableRows>
                  <ItemTable>{linha.id}</ItemTable>
                  <ItemTable>{linha.first_name}</ItemTable>
                  <ItemTable>{linha.last_name}</ItemTable>
                  <ItemTable>{`${((Number(linha.participation)*100)/participTotal).toFixed(1)}%`}</ItemTable>
              </TableRows>
            })}
          </Table>
          :
          <></>
          }
          <Donnut>
              <Doughnut data={data}/>
          </Donnut>
        </Graphics>
      </Content>
    </Maincontainer>
  );
}

export default App;