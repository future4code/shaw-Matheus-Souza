import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    color: black;
    background-color: rgb(238,238,238,0.65);
    border-radius: 10px;
    margin: 10px 0;
    padding: 15px;
    font-family: 'Noto Sans', sans-serif;
    p{
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0;
    }
    h3{
        margin: 30px 0;
        margin-top: 15px;
    }
`
export const FooterCard = styled.div`
    display: flex;
    align-items: center;
`
export const Votos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 0 5px;
    img{
        margin: 0 5px;
        width: 25px;
        height: 25px;
    }
`
export const Comentar = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    margin: 0 15px;
    padding: 0 10px;
    img{
        margin: 0 5px;
        width: 30px;
        height: 30px;
    }
`