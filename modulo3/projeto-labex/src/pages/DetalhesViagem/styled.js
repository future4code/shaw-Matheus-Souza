import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ListaCandidatos = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 10px;
    padding: 20px;
    box-shadow: 5px 5px 5px lightgrey;
    .botoes{
        display: flex;
        align-self: center;
        width: 50%;
        justify-content: space-between;
        button{
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        }
    }
`