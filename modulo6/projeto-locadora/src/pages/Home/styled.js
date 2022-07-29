import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
/* height: 100vh; */
min-height: 100vh;
align-items: center;
`

export const MoviesList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`

export const DivTeste = styled.div`
    display: flex;
    p{
        font-weight: bold;
        color: #5C16C5;
        margin: 10px;
        margin-bottom: 50px;
        :hover{
            cursor: pointer;
        }
    }
`