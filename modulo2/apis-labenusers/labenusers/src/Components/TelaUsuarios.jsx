import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DetalheUser from './DetalhesUser';

const MainContainer = styled.div`
    display: ${(props) => props.mostrar === false ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 15px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px;
`
const ListaUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    button {
        :hover{
        background-color: red;
        color: white; 
        }
    }
`

const BuscaUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-top: 3px solid black;
    margin: 15px;
    h3{
        margin: 15px 5px 
    }
    div{
        display:flex;
    }
    input{
        border-radius: 20px;
        padding: 10px;
        margin: 5px; 
    }
    button{
        border-radius: 20px;
        padding: 10px;
        margin: 5px; 
    }
`

class TelaUsuarios extends React.Component{
    render(){

        const listaUsuarios = this.props.usuarios.map((usuario) =>{
            return(
                <li>
                    <span 
                        onClick={() => this.props.pagDetalhe(usuario.id)}
                    >{usuario.name} </span>
                    <button
                        onClick={() => this.props.deleteUser(usuario.id)}
                    >X</button>
                </li>
            )   
        })

        return(
            <div>
                {this.props.pgUsuarios === true ? (
                    <MainContainer mostrar={this.props.mostrar} >
                        <ListaUsuarios>
                            <ul>
                                {listaUsuarios}
                            </ul>
                        </ListaUsuarios>
                        <BuscaUsuarios>
                            <h3>Procurar Usuário</h3>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Digite o nome exato'
                                    value={this.props.nomeBusca}
                                    onChange={this.props.updateBusca}
                                />
                                <button
                                    onClick={this.props.searchUsers}
                                >
                                    Buscar
                                </button>
                            </div>
                        </BuscaUsuarios>   
                    </MainContainer> 
                    ) : (
                        <DetalheUser
                            idUsuario={this.props.idUsuario} 
                            detalheUser={this.props.detalheUser}
                            pagDetalhe={this.props.pagDetalhe}
                            pgUsuarios={this.props.pgUsuarios}
                            getUserDetail={this.props.getUserDetail}
                            voltaLista={this.props.voltaLista}
                            novoNome={this.props.novoNome}
                            novoEmail={this.props.novoEmail}
                            editNome={this.props.editNome}
                            editEmail={this.props.editEmail}
                            editUser={this.props.editUser}
                            edicao={this.props.edicao}
                            abreEdicao={this.props.abreEdicao}
                        />
                    )
                }
            </div>)  
    }
}

export default TelaUsuarios