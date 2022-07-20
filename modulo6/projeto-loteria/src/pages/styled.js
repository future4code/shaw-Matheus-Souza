import styled from 'styled-components'

const colorType = color => {
    switch (color) {
      case "/":
        return "#6BEFA3";
      case "/quina":
        return "#8666EF";
      case "/lotofacil":
        return "#DD7AC6";
      case "/lotomania":
        return "#FFAB64";
      case "/timemania":
        return "#5AAD7D";
      case "/diadesorte":
        return "#BFAF83";
      default:
        return "#6BEFA3";
    }
  };

export const MainContainer = styled.div`
    display: flex;
    flex-flow: row;
    text-align: center;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    background-color: #EFEFEF;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      flex-flow: column;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    background-color: ${({ color }) => colorType(color)};
    position: relative;
    select{
        font-family: "Montserrat", sans-serif;
        border-radius: 5px;
        padding: 5px;
    }
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      width: 100%;
      height: 60%;
    }
`

export const LeftContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    height: 95%;
    margin: auto 50px;
    color: white;
    @media screen and (min-device-width:426px) and (max-device-width:768px){
      align-items: center;
      height: 70%;
      margin-bottom: 15%;
    }
    @media screen and (min-device-width:376px) and (max-device-width:425px){
      align-items: center;
      height: 70%;
      margin-bottom: 25%;
    }
    @media screen and (min-device-width:320px) and (max-device-width:375px){
      align-items: center;
      height: 70%;
      margin-bottom: 30%;
    }
`

export const GameName = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    font-size: 23px;
    font-weight: bolder;
    img{
        width: 50px;
        margin: 0 10px;
    }
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      flex-flow: column;
      p{
        margin: 0;
      }
    }
`

export const Contest = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    p{
        margin: 5px;
    }
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      align-items: center;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    margin: auto;
    width: 60%;
    height: 100%;
    position: relative;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      width: 100%;
      height: 40%;
    }
`

export const RightBackground = styled.img`
    height: 100%;
    position: absolute;
    left: 50%;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      display: none;
    }
`
export const RightBackgroundHoriz = styled.img`
    display: none;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      display: flex;
      width: 100%;
      height: 50%;
      position: absolute;
      top: 75%;
    }
`

export const RightContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 90%;
    height: 100%;
    p{
        font-weight: bolder;
        margin-bottom: 35px;
    }
    @media screen and (min-device-width:320px) and (max-device-width:425px){
      p{
        margin-bottom: 20px;
      }
    }
`

export const Texto = styled.p`
  display: flex;
  position: absolute;
  bottom: 0%;
`

export const Numbers = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 65%;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      margin-bottom: 15%;
    }
    @media screen and (min-device-width:376px) and (max-device-width:425px){
      margin-bottom: 30%;
      width: 80%;
    }
    @media screen and (min-device-width:320px) and (max-device-width:375px){
      margin-bottom: 40%;
      width: 90%;
    }
`