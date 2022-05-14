import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useForm } from '../../hooks/Requests'
import { toFeed, toHome, toRegister } from '../../routes/coordinator'
import { Main, MainContainer } from './style'

const Login = () => {
  const { formulario, onChange, limpaInputs } = useForm({ email: "", password: "" });
  const navigate = useNavigate()

  const logar = (event) => {
    event.preventDefault()
      axios.post("https://labeddit.herokuapp.com/users/login",formulario)
        .then((response) => {
          limpaInputs()
          localStorage.setItem("token", response.data.token);
          toFeed(navigate)
        }).catch((error) => {
          alert("Não foi possivel se logar")
        });
  };

  return (
    <MainContainer>
      <Header/>
      <Main>
        <h1>Login</h1>
        <form onSubmit={logar}> 
          <input
            name='email'
            placeholder='Email'
            type='email'
            value={formulario.email}
            onChange={onChange}
            required
          />
          <input
            name='password'
            placeholder='Senha'
            type='password'
            value={formulario.password}
            onChange={onChange}
            required
          />
          <button>Continuar</button>
        </form>
        <h3>Primeira vez no Labeddit?</h3>
        <button onClick={()=>toRegister(navigate)}>Cadastrar-se</button>
      </Main>
    </MainContainer>
  )
}

export default Login