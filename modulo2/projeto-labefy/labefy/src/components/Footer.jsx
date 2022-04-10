import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color:#212121; 
    /* position: absolute;
    bottom: 0;     */
    div{
        margin:25px;
    }
    .div2{
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        width: 70%;
        margin:25px;
        color: white;
        .nome{
            font-weight: bolder;
        }
        div{
            display:flex;
            flex-direction: column;
            justify-content:center;
            margin-right: 100px;
        }
        audio{
            margin-left: 100px;
        }
    } 
`


class Footer extends React.Component{
    render() {
        return(
            <MainContainer>
                {this.props.playMusica === false ? (
                    <div>
                        <audio controls>
                        <source  type="audio/mp3"/>
                    </audio> 
                    </div>
                ) : (
                    <div className='div2'>
                        <div>
                            <span className='nome'>{this.props.musicaTocada.name} </span>
                            <spam className='artista'>{this.props.musicaTocada.artist}</spam>
                        </div>
                        <audio controls autoPlay>
                            <source src={this.props.musicaTocada.url} type="audio/mp3"/>
                        </audio> 
                    </div>
                )}   
            </MainContainer>
        )
    }
}

export default Footer