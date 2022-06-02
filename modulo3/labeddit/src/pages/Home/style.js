import styled from 'styled-components'
import espaco from '../../assets/img/espaco.png'
import espacoVazio from '../../assets/img/espacoVazio.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    h2{
        width: 85%;
        margin-top: 35px;
    }
    .Logo{
        margin-top: 30px;
        width: 75%;
    }
`