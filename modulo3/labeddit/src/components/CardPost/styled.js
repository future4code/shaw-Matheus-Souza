import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: whitesmoke;
    border-radius: 10px;
    margin: 10px 0;
    padding: 15px;
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
    padding: 0 10px;
    img{
        margin: 0 5px;
        width: 30px;
        height: 30px;
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
        width: 40px;
        height: 40px;
    }
`