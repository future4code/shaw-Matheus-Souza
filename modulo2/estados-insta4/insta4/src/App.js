import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputNovoPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
input{
  border-radius: 8px;
  margin: 2px;
  padding: 3px;
}
button{
  background-color: #163957;
  color: white;
  border-radius: 8px;
  margin: 2px;
  padding: 4px;
}
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: 1,
        fotoPost: 1
      },
      {
        nomeUsuario:'Matheus',
        fotoUsuario: 2,
        fotoPost: 2
      },
      {
        nomeUsuario : 'Mari',
        fotoUsuario: 3,
        fotoPost: 3
      }               
    ],
    inputNome: "",
    inputFotoUser: "",
    inputFotoPost: ""
  };

  adicionarPost = () => {

    const novoPost = {
      nomeUsuario : this.state.inputNome,
      fotoUsuario: this.state.inputFotoUser,
      fotoPost: this.state.inputFotoPost
    };
    const novaListaPost = [...this.state.post, novoPost];

    this.setState({post: novaListaPost})
    this.setState({ inputNome: "" });
    this.setState({ inputFotoUser: "" });
    this.setState({ inputFotoPost: "" });
  };
  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputFotoUser = (event) => {
    this.setState({ inputFotoUser: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  render() {

    const listaDePosts = this.state.post.map((postagem) => {
      return (
          <Post
          nomeUsuario = {postagem.nomeUsuario}
          fotoUsuario = {postagem.fotoUsuario}
          fotoPost = {postagem.fotoPost}
          />      
      )
    });

    return (
      <MainContainer>

        <InputNovoPost>
        <input
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.inputFotoUser}
            onChange={this.onChangeInputFotoUser}
            placeholder={"Foto Perfil"}
          />
           <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionarPost}>Adicionar</button>
        </InputNovoPost>
        
       {listaDePosts}

      </MainContainer>
    );
  }
}

export default App;
