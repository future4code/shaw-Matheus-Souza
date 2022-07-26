import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    }
`

export const Content = styled.div`
    color: white;
    display: flex;
    align-items: flex-start;
    width: 90%;
`

export const PosterBox = styled.div`
    width: 40%;
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
    width: 60%;
    margin-top: 10px;
`

export const Title = styled.div`
    width: 80%;
    font-size: 1.8em;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 20px;
`

export const Overview = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    width: 100%;
    margin-bottom: 50px;
`