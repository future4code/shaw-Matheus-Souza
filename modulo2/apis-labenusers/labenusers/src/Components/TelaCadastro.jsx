import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div`
    display: ${(props) => props.mostrar === false ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 15px;
    width: 250px;
    height: 250px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px;
    input{
        border-radius: 20px;
        padding: 10px;
        margin: 5px;
    }
    button{
        width: 80%;
        border-radius: 20px;
        padding: 10px;
        margin: 5px; 
    }
    :hover{
        button{
            background-color: #9fc5e8;
        }
    }
`

class TelaCadastro extends React.Component{
    render(){
        return(
            <MainContainer
                mostrar={this.props.mostrar}
            >
                <h3>Cadastre-se</h3>
                <input
                    placeholder='Nome'
                    value={this.props.inputNome}
                    onChange={this.props.updateNome}
                />
                <input
                    placeholder='Email'
                    value={this.props.inputEmail}
                    onChange={this.props.updateEmail}
                />
                <button
                onClick={this.props.createUser}
                >Criar Usuário</button>
            </MainContainer>
        )
    }
}

export default TelaCadastro