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
    novoNome: "",
    novoEmail: "",
    usuarios: [],
    idUsuario: "",
    detalheUser: {},
    nomeBusca:"",
    mostrar: false,
    pgUsuarios: true,
    edicao: false,
  }
  componentDidMount() {
    this.getAllUsers();
    this.getUserDetail();
  }
  updateNome = (dig) => {
    this.setState({ inputNome: dig.target.value });
  };
  updateEmail = (dig) => {
    this.setState({ inputEmail: dig.target.value });
  };
  editNome = (dig) => {
      this.setState({ novoNome: dig.target.value });
  };
  editEmail = (dig) => {
      this.setState({ novoEmail: dig.target.value });
  };
  updateBusca = (dig) => {
    this.setState({ nomeBusca: dig.target.value });
  };
  onClickTrocaTela = () => {
    this.setState({mostrar: !this.state.mostrar})
    this.setState({pgUsuarios: true})
    this.setState({idUsuario: ""});
  }
  voltaLista =() => {
    this.setState({pgUsuarios: true}) 
    this.setState({idUsuario: ""});   
  }
  abreEdicao =() => {
    this.setState({edicao: true}) 
}
  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios.get(url,headers).then((resp) => {
      this.setState({usuarios:resp.data})
    }).catch((erro) => {
      console.log(erro.resp.data.message)
    })
  }
  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"; 
    axios.post(url,body,headers).then(() => {
      this.getAllUsers();
      alert(`${this.state.inputNome} cadastrado(a) com sucesso`)
      this.setState({inputNome:"",inputEmail:""});
    }).catch((erro) => {
      alert("Erro de cadastro");
      console.log(erro)
    })
  };
  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    if(window.confirm("Tem certeza que deseja deletar?")){
      axios.delete(url,headers).then(() => {
        this.getAllUsers()
      }).catch((erro) => {
        console.log(erro)
      });
    }
  };
  searchUsers = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.nomeBusca}&email=`
    if(this.state.nomeBusca === ""){
      this.getAllUsers();
    } else {
      axios.get(url,headers).then((resp) => {
        this.setState({usuarios: resp.data})
      }).catch((erro) => {
        alert("Erro na busca");
        console.log(erro)
      })
    } 
  }
  getUserDetail = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.get(url,headers).then(resp => {
        this.setState({ detalheUser: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  pagDetalhe = (id) => {
    this.setState({pgUsuarios: !this.state.pgUsuarios})
    if (this.state.pgUsuarios === true) {
      this.getUserDetail(id)
      this.setState({ idUsuario: id})
      ;
    } else {
      this.setState({ idUsuario: ""});
    }
    console.log(this.state.pgUsuarios)
    console.log(this.state.usuarios)
    
  };
  editUser = (id) => {
    const body = {
      name: this.state.novoNome,
      email: this.state.novoEmail
    };
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.idUsuario}`
    axios.put(url,body,headers).then(() => {
        alert(`Usuário ${this.state.novoNome} editado com sucesso!`);
        this.setState({ novoNome: "", novoEmail: "" });
        this.getUserDetail(id);
        this.setState({edicao: false});
        this.getAllUsers();
      })
      .catch(error => {
        alert("Erro ao editar o usuário");
        console.log(error);
      });
  };
  
  render() {
    return (
      <MainContainer>
        <button onClick={this.onClickTrocaTela}>Trocar tela</button>
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
          novoNome={this.state.novoNome}
          novoEmail={this.state.novoEmail}
          editNome={this.editNome}
          editEmail={this.editEmail}
          mostrar={this.state.mostrar}
          deleteUser={this.deleteUser}
          searchUsers={this.searchUsers}
          pagDetalhe={this.pagDetalhe}
          voltaLista={this.voltaLista}
          pgUsuarios={this.state.pgUsuarios}
          detalheUser={this.state.detalheUser}
          idUsuario={this.state.idUsuario}
          getUserDetail={this.getUserDetail}
          editUser={this.editUser}
          edicao={this.state.edicao}
          abreEdicao={this.abreEdicao}
        />
      </MainContainer>
    )
  }
}

export default App;