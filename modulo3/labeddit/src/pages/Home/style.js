import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: whitesmoke;
    margin: 0;
    padding: 0;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 6vh;
    background-color: whitesmoke;
    box-shadow: 0px 2px 10px gray;
    .imgs{
        display: flex;
        align-items: center;
        text-align: center;
        height: 100%;
        margin-left: 10px;
        gap: 2px;
        img{
            height: 75%;
        }
    }
`
export const Botoes = styled.div`
    margin-right: 10px;
`