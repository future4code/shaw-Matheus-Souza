import styled from "styled-components";

const CardsWidth = location => {
    // const numero = Number(location.substring(1))
    switch (location) {
        case "/":
        case `/${Number(location.substring(1))}`:
            return "15%";
        default:
            return "150px";
    }
};

export const MainContainer = styled.div`
    width: ${({ location }) => CardsWidth(location)};
    margin: 15px;
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