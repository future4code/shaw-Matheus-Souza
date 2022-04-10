import React from 'react';
import styled from 'styled-components';
import perfil from '../img/perfil.png'
import card1 from '../img/card1.png'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'
import card4 from '../img/card4.png'
import card5 from '../img/card4.png'
import card6 from '../img/card6.png'
import card7 from '../img/card7.png'
import card8 from '../img/card8.png'
import card9 from '../img/card9.png'


const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    justify-items: center;
    margin: 25px;
    padding-bottom: 25px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px;
    
    
`
const Top = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:end;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-right: 30px;
    margin-top: 30px;
    .topo{
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        justify-items: center;
        width: 40%;
        .premiun{
            border-radius: 25px;
            padding: 15px;
            background-color: inherit;
            color: white;
            img{
                width: 30px;
            }
        }
        .perfil{
            display:flex;
            flex-direction: row;
            justify-content:center;
            align-items: center;
            border-radius: 25px;
            padding-right: 15px;
            background-color: black;
            opacity:70%;
            color: white;
            img{
                width: 30px;
                margin-right: 10px;
                
            }
        }
    }
`
const Main = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:start;
    align-items: center;
    justify-items: center;
    width: 100%;
    /* background-color:lightblue; */
    color:white;
    div{
        display:flex;
        flex-flow: column;
        justify-content:start;
        align-items: flex-start;
        justify-items: center;
        width: 100%;
        h1{
            margin: 20px;
        }
        h2{
            margin: 0 35px;
        }
        
    }
    .imgs{
        display:flex;
        flex-flow: row wrap;
        width: 80%;
        margin: 10px;
        img{
            margin: 15px;
            width: 250px;
        }
    }
    
`

class PagInicio extends React.Component {
    render() {
        return (
            <MainContainer>
                <Top>
                    <div className='topo'>
                        <button className='premiun'>Assine o Premiun</button>
                        <button className='perfil'>
                            <img src={perfil} alt='Perfil'/>
                            Criar conta
                        </button>
                    </div>
                </Top>
                <Main>
                    <div>
                        <h1>Bem vindo(a)</h1>
                        <h2>Descubra seu estilo</h2>
                    </div>
                    <div className='imgs'>
                        <img src={card1} alt='card1'/>
                        <img src={card2} alt='card2'/>
                        <img src={card3} alt='card3'/>
                        <img src={card4} alt='card4'/>
                        <img src={card5} alt='card5'/>
                        <img src={card6} alt='card6'/>
                        <img src={card7} alt='card7'/>
                        <img src={card8} alt='card8'/>
                        <img src={card9} alt='card9'/>
                    </div>  
                </Main>
            </MainContainer>
        )
    }
}

export default PagInicio