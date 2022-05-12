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
        font-weight
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
        width: 80%;
        border-bottom: 2px solid black;
        margin-bottom: 25px;
        input{
            width: 100%;
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
        }
        textarea {
            min-height: 70px;
            width: 100%;
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid black;
        }
        button{
            margin-bottom: 20px;
        }
    }
`