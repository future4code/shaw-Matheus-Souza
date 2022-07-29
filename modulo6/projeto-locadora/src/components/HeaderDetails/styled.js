import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 35%;
    background-color: #2D0C5E;
    font-family: "Roboto", sans-serif;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #5C16C5;
    color: white;
    p{
        font-size: 25px;
        font-weight: bold;
        margin: 5px 10px 5px 35px;
    }
    div{
        width: 50px;
        height: 20px;
        background-color: #FFFFFF;
        border-radius: 20px;
        :hover{
            cursor: pointer;
        }
    }
`

export const Content = styled.div`
    color: white;
    display: flex;
    align-items: flex-start;
    width: 90%;
`

export const PosterBox = styled.div`
    width: 400px;
    margin: 15px 0;
    margin-right: 25px;
    position: relative;
    top: 50px;
    img{
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 2px 5px grey;
        
    }
`

export const TextBox = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    width: 75%;
    margin-top: 10px;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 50px;
    margin-bottom: 20px;
`

export const Subtitle = styled.div`
    display: flex;
    flex-flow: row wrap;
    P{
        margin: 0 2px;
    }
`

export const Overview = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    width: 100%;
    margin-bottom: 50px;
`

export const Grafico = styled.div`
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: space-between;
`

export const Triangulo = styled.div`
    width: 250px;
    height: 250px;
    background-color: #36ff9a;
    margin:0 auto;
    border-radius: 50%;
    animation: square 3s linear;

    @keyframes square {
    0%   {
        clip-path: polygon(100% 0, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 50% 50%);
        background-color: #36ff9a;
    }
    25%  {
        clip-path: polygon(100% 0, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 50%);
        background-color: #36ff9a;
    }
    50%{
        clip-path: polygon(100% 0, 100% 100%, 0% 100%, 0% 100%, 0 100%, 50% 50%);
        background-color: #36ff9a;
    }
    75%  {
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%, 0 0, 50% 50%);
        background-color: #36ff9a;
    }
    100% {
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 100% 0, 50% 50%);
        background-color: #36ff9a;
    }
    }
`
