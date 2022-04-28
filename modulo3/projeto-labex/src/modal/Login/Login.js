import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { voltarPag, areaLogado } from '../../routes/coordinator';
import { Background, MainContainer } from './style';

const Login = () => {
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const navegar = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    
    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const logar = () => {
        console.log(email, senha);
        const body = {
          email: email,
          password: senha
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-souza-shaw/login",body)
          .then((response) => {
            console.log("Deu certo: ", response.data.token);
            localStorage.setItem("token", response.data.token);
            areaLogado(navegar,"logado");
          })
          .catch((error) => {
            console.log("Deu errado: ", error.response);
            alert("Não foi possivel se logar")
            voltarPag(navegar);
          });
      };

  return (
    <Background>
        <MainContainer>
        <input
            placeholder='Email'
            type='email'
            value={email}
            onChange={onChangeEmail}
        />
        <input
            placeholder='Senha'
            type='password'
            value={senha}
            onChange={onChangeSenha}
            onKeyPress={event => {
                if(event.key === 'Enter') {
                  logar()
                }}}
        />
        <button onClick={logar}>Enviar</button>
        </MainContainer>  
    </Background>
  )
}

export default Login