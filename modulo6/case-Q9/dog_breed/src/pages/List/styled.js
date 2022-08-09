import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 20vh;
    justify-content: center;
    align-items: center;
    background-color: #674EA7;
    font-family: 'Gloria Hallelujah', cursive;
    color: white;
    h1{
        font-size: 60px;
        margin: 15px;
    }
    p{
        margin: 10px;
    }
`

export const BreedOptions = styled.div`
    display: flex;
    width: 100%;
    margin: 15px;
    justify-content: center;
    button{
        margin: 10px;
        margin-bottom: 20px;
        padding: 15px;
        border: none;
        border-radius: 10px;
        font-family: 'Gloria Hallelujah', cursive;
        font-size: 15px;
        font-weight: bold;
        background-color: #E4AD04;
        transition: 0.2s;
        :hover{
            cursor: pointer;
            transition: 0.2s;
            transform: scale(1.02);
            box-shadow: 0px 0px 10px black;
        }
    }
`

export const PhotoList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
`