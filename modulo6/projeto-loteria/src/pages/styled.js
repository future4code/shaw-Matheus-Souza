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
    height: 100vh;
    background-color: ${({ color }) => colorType(color)};
`

export const LeftSide = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    margin: auto 50px;
    width: 30%;
    height: 90%;
    select{
        font-family: "Montserrat", sans-serif;
        border-radius: 5px;
        padding: 5px;
    }
`

export const LeftContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    height: 95%;
    margin: auto;
    color: white;
`

export const GameName = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    font-size: 23px;
    font-weight: bolder;
    img{
        width: 40px;
        margin: 0 10px;
    }
`

export const Contest = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    p{
        margin: 5px;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    margin: auto;
    width: 90%;
    height: 100%;
    position: relative;
    /* background-color: #FFFFFF; */
    /* border-radius: 400px 0px 0 400px ; */
`

export const RightBackground = styled.div`
    width: 105%;
    height: 200%;
    background-color: #EFEFEF;
    border-radius: 1000px 0px 0 1000px ;
    position: absolute;
    top: -50%;
    box-sizing: border-box;
`

export const RightContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    width: 90%;
    height: 100%;
    margin: auto;
    p{
        font-weight: bolder;
        margin-bottom: 100px;
    }
`

export const Numbers = styled.div`
display: flex;
    flex-flow: row;
    align-items: center;
    position: absolute;
    bottom: 50%;
`