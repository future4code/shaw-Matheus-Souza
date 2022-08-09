import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const DogPhoto = styled.img`
    width: 250px;
    height: auto;
    margin: 15px;
    border-radius: 5px;
    transition: 0.2s;
    :hover{
        transition: 0.2s;
        transform: scale(1.02);
        box-shadow: 0px 0px 5px grey;
    }
`

export const PhotoModal = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 700px;
    min-height: 300px;
    border-radius: 10px;
    background-color: whitesmoke;
    color: black;
    margin: auto;
    button{
        align-self: flex-start;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px 10px;
        border: none;
        transition: 0.2s;
        :hover{
            transition: 0.2s;
            cursor: pointer;
            color: white;
            background-color: #444444;
        }
    }
    img{
        width: 70%;
        height: auto;
        margin: 20px;
        margin-bottom: 40px;
        border-radius: 10px;
    }
`