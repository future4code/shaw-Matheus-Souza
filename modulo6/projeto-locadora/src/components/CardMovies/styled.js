import styled from "styled-components";

export const MainContainer = styled.div`
    width: 15%;
    margin: 10px;
    img{
        width: 100%;
        height: auto;
        border-radius: 5px;
        border: 1px #E7E7E7 solid;
        transition: 0.3s;
        :hover{
            transition: 0.3s;
            transform: scale(1.05);
            box-shadow: 0px 0px 15px grey;
        }
    }
`