import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import CriaPlaylist from './components/CriaPlaylist';

const header = {
  headers: {
    Authorization: "matheus-azevedo-shaw"
  }
};

class App extends React.Component {
  state={
    novaPlay:"",
    playlists:[],
  }
  // componentDidMount() {
  //   this.getAllPlaylist();
  // }
  updateNovaPlay = (dig) => {
    this.setState({ novaPlay: dig.target.value });
  };
  getAllPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios.get(url,header).then((resp) => {
      this.setState({playlists:resp.data})
    }).catch((erro) => {
      console.log(erro)
    })
  }
  createPlaylist = () => {
    const body = {
      name: this.state.novaPlay,
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"; 
    axios.post(url,body,header).then(() => {
      this.getAllPlaylist();
      console.log(this.state.playlists)
      alert(`Playlist ${this.state.novaPlay} cadastrada com sucesso`)
      this.setState({novaPlay:""});
    }).catch((erro) => {
      alert("Erro de cadastro");
      console.log(erro)
    })
  };

  render(){

    const listaPlays = this.state.playlists.map((nomes) =>{
      return(
          <li>
              <span 
                  // onClick={() => this.props.pagDetalhe(nomes.id)}
              >{nomes.name} </span>
              <button
                  // onClick={() => this.props.deleteUser(nomes.id)}
              >X</button>
          </li>
      )   
  })

    return (
      <div className="App">
        <CriaPlaylist
          novaPlay={this.state.novaPlay}
          updateNovaPlay={this.updateNovaPlay}
          createPlaylist={this.createPlaylist}
        />
        {listaPlays}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
