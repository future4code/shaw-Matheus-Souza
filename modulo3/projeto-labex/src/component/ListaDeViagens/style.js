import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        position: fixed;
        top: 35%;
        left: 10%;
        width: 120px;
        height: 120px;
        transition: 0.3s;
        :hover{
            transform: scale(1.1);
            transition: 0.3s;
        }
    }
`
export const CardViagem = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: start;
    padding: 20px;
    margin: 20px 0;
    width: 75%;
    border-radius: 20px;
    p{
        margin:10px;
    }
    transition: 0.3s;
        :hover{
            transform: scale(1.1);
            transition: 0.3s;
            box-shadow: 5px 5px 10px gray;
        }
`
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
`