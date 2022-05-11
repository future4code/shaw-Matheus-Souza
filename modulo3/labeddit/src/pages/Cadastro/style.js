import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        padding: 5px 10px;
        margin: 5px;
        border-radius: 5px;
        background-color: inherit;
        transition: 0.3s;
        font-size: 1rem;
        :hover{
            transition: 0.3s;
            transform: scale(1.1);
            color: white;
            background-color: #303030;
            border-color: white;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70%;
        border-bottom: 2px solid black;
        input{
            width: 100%;
            padding: 5px;
            margin: 5px;
            border-radius: 5px;
        }
        button{
            margin-bottom: 25px;
        }
    }
`