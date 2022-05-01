import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #242424;
color: white;
button{
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    color: white;
    background-color: inherit;
    transition: 0.3s;
    font-size: 21px;
    :hover{
        transition: 0.3s;
        transform: scale(1.1);
        color: white;
        background-color: #303030;
        border-color: white;
    }
}
.botoes{
    margin: 15px;
    display: flex;
    justify-content: space-between;
    width: 60%;
}
`