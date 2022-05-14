import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/Requests'
import { toFeed, toHome, toLogin } from '../../routes/coordinator'
import { Main, MainContainer } from './style'
import Header from '../../components/Header/Header'

const Cadastro = () => {
  const { formulario, onChange, limpaInputs } = useForm({ username:"", email: "", password: "" });
  const navigate = useNavigate()

  const cadastrar = (event) => {
    event.preventDefault()
      axios.post("https://labeddit.herokuapp.com/users/signup",formulario)
        .then((response) => {
          alert("Cadastro realizado, seja bem vindo(a)!")
          limpaInputs()
          localStorage.setItem("token", response.data.token);
          toFeed(navigate)
        }).catch((error) => {
          alert("Não foi possivel se cadastrar")
        });
  };

  return (
    <MainContainer>
      <Header/>
      <Main>
        <h1>Cadastro</h1>
        <form onSubmit={cadastrar}>
          <input
            name='username'
            placeholder='Nome de Usuario'
            type='text'
            value={formulario.username}
            onChange={onChange}
            required
          />
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
            pattern='^.{8,30}$'
            title='Deve conter entra 8 e 30 digitos, entre letras e números'
            required
          />
          <button>Continuar</button>
        </form>
        <h3>Já faz parte do Labeddit?</h3>
        <button onClick={()=>toLogin(navigate)}>Entrar</button>
      </Main>
    </MainContainer>
  )
}

export default Cadastro