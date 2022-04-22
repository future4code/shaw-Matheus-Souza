import styled from 'styled-components'

export const MainContainer = styled.div`
    display: inline-block;
    position: absolute;
    bottom: 50%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 64px;
    height: 64px;
    z-index: 0;
`
export const Conteudo = styled.div`
    top: 23px;
    left: 19px;
    position: absolute;
    transform: scale(2.5);
    animation: batimento 0.5s infinite;
    @keyframes batimento {
        0% {
        transform: scale(1.95);
        }
        5% {
            transform: scale(2.1);
        }
        39% {
            transform: scale(1.85);
        }
        45% {
            transform: scale(2);
        }
        60% {
            transform: scale(2.95);
        }
        100% {
            transform: scale(1.9);
        }  
    }

`