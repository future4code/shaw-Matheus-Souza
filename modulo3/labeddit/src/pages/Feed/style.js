import styled from 'styled-components'
import espaco from '../../assets/img/espaco.png'
import espacoVazio from '../../assets/img/espacoVazio.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: 'Noto Sans', sans-serif;
    color: white;
    background: #242424 url(${espaco});
    animation: brilhoEspaco 4s infinite alternate ease-in-out;
    @keyframes brilhoEspaco{
        from{
            background: #242424 url(${espaco}) ;
        }
        to{
            background: #242424 url(${espacoVazio});
        }
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .volta{
        width: 20px;
        align-self: flex-start;
        margin-left: 5%;
    }
    button{
        padding: 10px 20%;
        margin: 15px;
        border-radius: 25px;
        border: none;
        color: white;
        background-color: #2986cc;
        background-image: linear-gradient(45deg, #2370a6, #3ea0ea);
        transition: 0.3s;
        font-size: 1rem;
        font-weight:bold;
        :hover{
            transition: 0.3s;
            transform: scale(1.1);
            color: white;
            background-color: #303030;
            border-color: white;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        border-bottom: 2px solid white;
        margin-bottom: 25px;
        input {
            width: 100%;
            padding: 15px;
            margin: 5px;
            border-radius: 10px;
            border: 2px solid black;
            font-family: 'Noto Sans', sans-serif;
            background-color: rgb(238,238,238,0.65);
            ::placeholder{
                font-weight: bold;
                color: black;
            }
        }
        textarea {
            min-height: 70px;
            width: 100%;
            padding: 15px;
            margin: 5px;
            border-radius: 10px;
            border: 2px solid black;
            font-family: 'Noto Sans', sans-serif;
            background-color: rgb(238,238,238,0.65);
            ::placeholder{
                font-weight: bold;
                color: black;
            }
        }
        button{
            margin-bottom: 30px;
            box-shadow: 0px 0px 5px;
        }
    }
`