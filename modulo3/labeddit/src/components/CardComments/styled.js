import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 80%;
    background-color: gray;
    border-radius: 10px;
    margin: 10px 0;
    padding: 15px;
    word-wrap: break-word;
`
export const Comentarios = styled.div`
    display: flex;
    flex-flow: column;
`
export const Votos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    padding: 0 15px;
    width: 25%;
    img{
        width: 30px;
        height: 30px;
        margin: 0 5px;
    }
`