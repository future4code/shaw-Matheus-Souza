import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 6vh;
    background-color: #2370a6;
    background-image: linear-gradient(80deg, #2370a6, #3ea0ea);
    box-shadow: 0px 2px 10px gray;
    margin-bottom: 20px;
    img{
            height: 60%;
            margin: 0 2px;
            margin-right: 10px;
        }
    .imgs{
        display: flex;
        align-items: flex-end;
        text-align: center;
        height: 100%;
        margin-left: 10px;
        gap: 2px;
        img{
            height: 75%;
            margin: 0 2px;
        }
    }
    button{
        padding: 5px 15px;
        margin: 0 10px;
        background-color: #2370a6;
        background-image: linear-gradient(-90deg, #2370a6, #2370a6);
        border-radius: 25px;
        border: none;
        color: white;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1rem;
    }
`

export const Botoes = styled.div`
    display: flex;
    margin-right: 5px;
`
export const Opcoes = styled.div`
    display: ${(props) => props.mostrar === false ? 'none' : 'flex'};
    flex-direction: column;
    background-color: #2370a6;
    border-radius:  15px 0px 15px 15px;
    margin-right: 5px;
    padding: 5px 10px;
    position: absolute;
    top: 5%;
    right: 7%;
    button{
        cursor: pointer;
        padding: 5px 0px;
        margin: 0px 10px;
        background-color: #2370a6;
        background-image: linear-gradient(-90deg, #2370a6, #2370a6);
        border-radius: 25px;
        border: none;
        color: white;
        font-family: 'Noto Sans', sans-serif;
    }
`