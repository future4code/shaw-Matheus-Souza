import styled from 'styled-components'


export const MainContainer = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
    color: black;
    width: 90%;
    height: 90%;
`
export const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    .match{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        text-align: center;
        font-weight: bold;
        width: 100%;
        transition: 0.2s;
        :hover{
            transition: 0.2s;
            background-color: #eeeeee;
            transform: scale(1.1);
        }
        img{
            width: 50px;
            height: 50px;
            border-radius: 30px;
            margin: 10px;
            margin-left: 0;
        }
    }
`