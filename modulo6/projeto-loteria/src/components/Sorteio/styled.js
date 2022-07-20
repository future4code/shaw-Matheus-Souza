import styled from "styled-components";

export const MainContainer = styled.div`
    align-items: center;
    p{
        background-color: white;
        margin: 5px;
        padding: 15px;
        border-radius: 50px;
    }
    @media screen and (min-device-width:320px) and (max-device-width:375px){
        p{
        padding: 10px;
        }
    }
`