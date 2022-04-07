import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const headers = {
    headers: {
      Authorization: "matheus-azevedo-shaw"
    }
};

const MainContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 15px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px;
    .inf{
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .div1{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-top: 20px;
        margin-left: 15px;
        p{
            margin:0 10px;
        }
        button{
            margin-top:25px;
            padding: 5px;
        }
    }
    .edicao{
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 25px;
        input{
            border-radius: 25px;
            padding: 10px;
            margin-top:5px;
        }
        button{
            margin-top:15px;
            padding: 5px;
        }
    }
    .div2{
        display: flex;
        justify-content: center;
        border-top: 2px solid black;
        margin: 15px;
        button{
            margin-top:15px;
            padding: 5px;
        }
    }
`



class DetalheUser extends React.Component{
    render() {
        return(
            <div>
                <MainContainer>
                    {this.props.edicao === false ? (
                        <div className='inf'>
                            <div className='div1'>
                                <p>{this.props.detalheUser.name}</p>
                                <p>{this.props.detalheUser.email}</p>
                                <button
                                onClick={this.props.abreEdicao}
                                >Editar Usuário</button>
                            </div> 
                            <div className='div2'>
                                <button
                                onClick={this.props.voltaLista}
                                >Voltar para lista de Usuários</button>
                            </div>  
                        </div>
                      
                    ) : (

                        <div className='edicao'>
                         <input
                            type="text"
                            placeholder='Digite o novo nome'
                            value={this.props.novoNome}
                            onChange={this.props.editNome}
                         />
                        <input
                            type="email"
                            placeholder='Digite o novo email'
                            value={this.props.novoEmail}
                            onChange={this.props.editEmail}
                        />
                        <button
                            onClick={()=>this.props.editUser(this.props.detalheUser.id)}
                        >Salvar edição</button>
                        </div>
                    )}
                    
                                   
                </MainContainer>
            </div>
            )
    }
}

export default DetalheUser
