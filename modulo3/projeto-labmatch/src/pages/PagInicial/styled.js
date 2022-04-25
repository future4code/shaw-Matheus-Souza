import styled from 'styled-components'

export const MainContainer = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .Botões{
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin-top: 30px;
        button{
            border-radius: 35px;
            padding: 20px;
            transition: 0.2s;
        }
        .like{
            border-color: green;
            :hover{
                transform: scale(1.1);
                transition: 0.2s;
                background-color: #e4f8dc;
                box-shadow: 2px 2px 5px #999999;
            }
        }
        .deslike{
            border-color: red;
                :hover{
                transform: scale(1.1);
                transition: 0.2s;
                background-color: #fdd6d4;
                box-shadow: 2px 2px 5px #999999;
            }
        }
    }
`