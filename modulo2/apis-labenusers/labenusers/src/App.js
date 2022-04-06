import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TelaCadastro from './Components/TelaCadastro'
import TelaUsuarios from './Components/TelaUsuarios';

const headers = {
  headers: {
    Authorization: "matheus-azevedo-shaw"
  }
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  button{
    border-radius: 20px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 5px; 
  }
`


class App extends React.Component {
  state = {
    inputNome:"",
    inputEmail:"",
    usuarios: [],
    nomeBusca:"",
    mostrar: false,
  }
  componentDidMount() {
    this.getAllUsers();
  }
  updateNome = (dig) => {
    this.setState({ inputNome: dig.target.value });
  };
  updateEmail = (dig) => {
    this.setState({ inputEmail: dig.target.value });
  };
  updateBusca = (dig) => {
    this.setState({ nomeBusca: dig.target.value });
  };
  onClickTrocaTela = () => {
    this.setState({mostrar: !this.state.mostrar})
  }
  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios.get(url,headers).then((res) => {
      this.setState({usuarios:res.data})
    }).catch((err) => {
      console.log(err.res.data.message)
    })
  }
  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"; 
    axios.post(url,body,headers).then((res) => {
      this.getAllUsers();
      this.setState({inputNome:"",inputEmail:""});
      alert("Cadastro criada com sucesso")
    }).catch((err) => {
      alert("Erro");
      console.log(err.res.data.message)
    })
  }
  deleteUsuario=(id) => {
    if(window.confirm("Tem certeza de que deseja deletar?")){
      this.deleteUser(id)
    }
  }
  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url,headers).then((res) => {
      this.getAllUsers()
    }).catch((err) => {
      console.log(err.res.data.message)
    })
  }
  searchUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email="
    axios.get(url,headers)
  }

  render() {
    return (
      <MainContainer>
        <button
          onClick={this.onClickTrocaTela}
        >Trocar tela</button>
        <TelaCadastro
          inputNome={this.state.inputNome}
          inputEmail={this.state.inputEmail}
          updateNome={this.updateNome}
          updateEmail={this.updateEmail}
          mostrar={this.state.mostrar}
          createUser={this.createUser}
        />
        <TelaUsuarios
          usuarios={this.state.usuarios}
          nomeBusca={this.state.nomeBusca}
          updateBusca={this.updateBusca}
          mostrar={this.state.mostrar}
          deleteUsuario={this.deleteUsuario}
        />
      </MainContainer>
    )
  }
}

export default App;
