import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import lupa from './img/lupa.png'

const header = {
  headers: {
    Authorization: "matheus-azevedo-shaw"
  }
};
const MainContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  nav{
    width: 300px;
    height: 100vh;
    background-color: black;
    color: white;
  }
  main{
    width: 90%;
    background-color: #444444;
  }
`
const Botoes = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  margin: 25px;
  border-bottom: 1px solid white;
  padding-bottom:10px;
  .buscar{
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items:center;
    margin-bottom: 15px;
    opacity:80%;
    img{
      width: 15px;
      height:15px;
      margin-right: 15px;
      margin-left: 2px;
    }
  }
  .criar{
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    margin-bottom: 15px;
    opacity:80%;
  }
  div{
    :hover{
      opacity:100%;
    }
    button{
      border-radius:30px;
      margin-right: 10px;
    }
  } 
`
const Lista = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  margin: 25px;
  li{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    opacity:80%;
    margin-bottom:5px;
    :hover{
    opacity:100%;
  }}
  button{
    border-radius:30px;
    margin-left: 10px;
  }
`

class App extends React.Component {
  state={
    novaPlay:"",
    nomeBusca:"",
    playlists:[],
    inputBuscar:false,
    inputCriar:false,
  }
  componentDidMount() {
    this.getAllPlaylist();
  }
  updateBusca = (dig) => {
    this.setState({ nomeBusca: dig.target.value });
  };
  updateNovaPlay = (dig) => {
    this.setState({ novaPlay: dig.target.value });
  };
  mostraInputBuscar = () => {
    this.setState({ inputBuscar: !this.state.inputBuscar });
  };
  mostraInputCriar = () => {
    this.setState({ inputCriar: !this.state.inputCriar });
  };
  getAllPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios.get(url,header).then((resp) => {
      this.setState({playlists:resp.data.result.list})
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
      alert(`Playlist ${this.state.novaPlay} cadastrada com sucesso`)
      this.setState({novaPlay: ""});
    }).catch((erro) => {
      alert("Erro de cadastro");
      console.log(erro)
    })
  };
  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    if(window.confirm("Tem certeza que deseja deletar?")){
      axios.delete(url,header).then(() => {
        this.getAllPlaylist()
      }).catch((erro) => {
        console.log(erro)
      });
    }
  };
  searchPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.nomeBusca}`
    if(this.state.nomeBusca === ""){
      this.getAllPlaylist();
      this.mostraInputBuscar()
    } else {
      axios.get(url,header).then((resp) => {
        this.setState({playlists: resp.data.result.playlist})
        this.setState({nomeBusca: ""})
        this.mostraInputBuscar()
      }).catch((erro) => {
        alert("Erro na busca");
        this.setState({nomeBusca: ""})
        console.log(erro)
      })
    } 
  }

  render(){

    const listaPlays = this.state.playlists.map((nomes) =>{
      return(
          <li>
              <span 
                  // onClick={() => this.props.pagDetalhe(nomes.id)}
              >{nomes.name} </span>
              <button
                  onClick={() => this.deletePlaylist(nomes.id)}
              >X</button>
          </li>
      )   
  })

    return (
      <MainContainer>
        <nav>
          <Botoes>
              {this.state.inputBuscar === false ? (
                <div 
                  className='buscar'
                  onClick={this.mostraInputBuscar}
                >
                  <img src={lupa} alt='Lupa'/>
                  <spam>Buscar</spam>
                </div>
              ) : (
                <div className='buscar'>
                  <img src={lupa} alt='Lupa' onClick={this.searchPlaylist}/>
                  <input
                    value={this.state.nomeBusca}
                    onChange={this.updateBusca}
                  />
                </div>
              )}
              {this.state.inputCriar === false ? (
                <div 
                  className='criar'
                  onClick={this.mostraInputCriar}
                  >
                <button>+</button>
                <spam> Criar playlist</spam>
                
              </div>
              ) : (
                <div className='criar'>
                  <button>+</button>
                  <input
                  value={this.state.novaPlay}
                  onChange={this.updateNovaPlay}
                  />
                </div>
              )}           
          </Botoes>
          <Lista>
            {listaPlays}
          </Lista>   
        </nav>
        <main>

        </main>
      </MainContainer>
    );
  }
}

export default App;
