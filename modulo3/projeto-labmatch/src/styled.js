import styled from 'styled-components'

export const AppMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #212121;
    height: 100vh;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 3px solid black;
    background-color: whitesmoke;
    border-radius: 15px;
    height: 600px;
    width: 400px;
    padding: 20px 0;
    position: relative;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #024786;
    margin-top: 0px;
    margin-bottom: 18px;
    color: #024786;
    h2{
        position: absolute;
        margin-bottom: 30px; 
    }
`
export const TelaMatch = styled.div`
    display: flex;
    position: relative;
    left: 40%;
    margin-bottom: 5px; 
`
export const TelaInicio = styled.div`
    display: flex;
    position: relative;
    right: 40%;
    margin-bottom: 5px; 
`