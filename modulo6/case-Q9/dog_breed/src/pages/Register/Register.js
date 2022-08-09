import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToList } from '../../routes/coordinator';
import { baseURL } from '../../constants/baseURL'
import { MainContainer } from './styled';

const Register = () => {
    const [formulario, setFormulario] = useState({ email: "" });
    const navigate = useNavigate()

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const registro = (event) => {
        event.preventDefault()
        axios.post(`${baseURL}/register`, formulario)
        .then((response) => {
            localStorage.setItem("token", response.data.user.token);
            goToList(navigate)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        const token =localStorage.getItem("token");
        if(token !== null && token !== ""){
          goToList(navigate)
        }
    },[])

  return (
    <MainContainer>
        <h1>Dog Gallery</h1>
        <p>Registes a email to see pretty dogs!</p>
        <form onSubmit={registro}>
            <input
                name='email'
                placeholder='Email'
                value={formulario.email}
                type='email'
                onChange={onChange}
                required>
            </input>
            <button>
                Enviar
            </button>
        </form>
    </MainContainer>
  )
}

export default Register