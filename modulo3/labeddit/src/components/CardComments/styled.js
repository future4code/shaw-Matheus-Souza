import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 80%;
    background-color: rgb(238,238,238,0.65);
    border-radius: 10px;
    margin: 10px 0;
    padding: 15px;
    word-wrap: break-word;
    color: black;
    p{
        font-size: 16px;
        font-weight: bold;
        margin: 20px 0;
    }
    h2{
        margin: 10px 0;
    }
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
    p{
        margin: 10px 0;
    }
`