import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: 'Gloria Hallelujah', cursive;
    color: #674EA7;
    h1{
        font-size: 60px;
        margin: 15px;
    }
    p{
        margin: 10px;
        margin-bottom: 30px;
        font-weight: bold;
    }
    input{
        min-width: 200px;
        padding: 15px;
        border-radius: 15px 0px 0px 15px;
        font-weight: bold;
    }
    button{
        padding: 15px;
        border-radius: 0px 15px 15px 0px;
    }
`