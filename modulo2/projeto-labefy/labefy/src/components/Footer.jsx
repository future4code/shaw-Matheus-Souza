import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color:#212121;  
`

class Footer extends React.Component{
    render() {
        return(
            <MainContainer>
                {this.props.playMusica === false ? (
                    <div></div>
                ) : (
                    <audio controls autoPlay>
                        <source src={this.props.musicaTocada} type="audio/mp3"/>
                    </audio> 
                )}   
            </MainContainer>
        )
    }
}

export default Footer