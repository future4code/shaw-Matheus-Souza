import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
                    {usuario.name} 
                    <button
                        onClick={() => this.props.deleteUsuario(usuario.id)}
                    >X</button>
                </li>
            )   
        })

        return(
            <MainContainer
                mostrar={this.props.mostrar}
            >
                <ListaUsuarios>
                    <ul>
                        {listaUsuarios}
                    </ul>
                </ListaUsuarios>
                <BuscaUsuarios>
                    <h3>Procurar Usuário</h3>
                    <div>
                        <input
                            placeholder='Digite o nome exato'
                            value={this.props.nomeBusca}
                            onChange={this.props.updateBusca}
                        />
                        <button>
                            Buscar
                        </button>
                    </div>
                </BuscaUsuarios>                
            </MainContainer>
        )
    }
}

export default TelaUsuarios