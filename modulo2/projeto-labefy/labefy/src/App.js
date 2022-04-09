import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import lupa from './img/lupa.png'
import DetalhePlay from './components/DetalhePlaylist';
import Footer from './components/Footer';

const header = {
  headers: {
    Authorization: "matheus-azevedo-shaw"
  }
};
const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
`
const ContainerTopo = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  nav{
    width: 300px;
    height: 90vh;
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
    input{
      border-radius: 6px;
    }
  }
  .criar{
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    margin-bottom: 15px;
    opacity:80%;
    input{
      border-radius: 6px;
    }
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
    detalhePlay: {},
    musicasPlay: [],
    idPlaylist:"",
    inputBuscar:false,
    inputCriar:false,
    inputAdd: false,
    nomeTrack:"",
    artistaTrack:"",
    urlTrack:"",
    playMusica:false,
    musicaTocada:"",
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
  updateNovaTrack = (dig) => {
    this.setState({ nomeTrack: dig.target.value });
  };
  updateArtistaTrack = (dig) => {
    this.setState({ artistaTrack: dig.target.value });
  };
  updateUrlTrack = (dig) => {
    this.setState({ urlTrack: dig.target.value });
  };
  mostraInputBuscar = () => {
    this.setState({ inputBuscar: !this.state.inputBuscar });
  };
  mostraInputCriar = () => {
    this.setState({ inputCriar: !this.state.inputCriar });
  };
  mostraInputAdd = () => {
    this.setState({ inputAdd: !this.state.inputAdd });
  };
  mostraPlayMusica = (url) => {
    this.setState({ playMusica: true });
    this.setState({ musicaTocada: url });
    // console.log(this.state.playMusica)
    // console.log(this.state.musicasPlay)
    // console.log(url)
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
      this.mostraInputCriar()
      alert(`Playlist ${this.state.novaPlay} cadastrada com sucesso`)
      this.setState({novaPlay: ""});
    }).catch((erro) => {
      alert("Erro de cadastro");
      this.mostraInputCriar()
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
  getPlaylistDetails = (name,id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${name}`
    axios.get(url,header).then((resp) => {
      this.setState({detalhePlay: resp.data.result.playlist[0]})
      this.setState({inputAdd: false})
      // console.log(this.state.detalhePlay)
      this.getPlaylistTracks(id)
    }).catch(err => {
      console.log(err);
    });
  }
  getPlaylistTracks = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url,header).then(resp => {
        this.setState({musicasPlay:resp.data.result.tracks})
        // console.log(this.state.musicasPlay)
        // console.log(resp.data)
      })
      .catch(err => {
        console.log(err);
      });
  };
  addTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const body = {
      name: this.state.nomeTrack,
      artist: this.state.artistaTrack,
      url: this.state.urlTrack,
    }
    axios.post(url,body,header).then(() => {
      alert("Música adicionada com sucesso");
      this.getPlaylistTracks(id)
      this.setState({nomeTrack:""})
      this.setState({artistaTrack:""})
      this.setState({urlTrack:""})
      this.mostraInputAdd()
    }).catch((erro) => {
      alert("Não foi possivel adicionar a música");
      this.setState({nomeTrack:""})
      this.setState({artistaTrack:""})
      this.setState({urlTrack:""})
      this.mostraInputAdd()
      console.log(erro)
    });
  };
  removeTrackFromPlaylist = (idList, idTrack) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idList}/tracks/${idTrack}`
    if(window.confirm("Tem certeza que deseja deletar?")){
      axios.delete(url,header).then(() => {
        this.getPlaylistTracks(idList)
      }).catch((erro) => {
        console.log(erro)
      });
    } else {
      console.log(idList, idTrack)
    }
  };

  render(){

    const listaPlays = this.state.playlists.map((nomes) =>{
      return(
          <li>
              <span 
                  onClick={() => this.getPlaylistDetails(nomes.name, nomes.id)}
              >{nomes.name} </span>
              <button
                  onClick={() => this.deletePlaylist(nomes.id)}
              >X</button>
          </li>
      )   
  })

    return (
      <MainContainer>
        <ContainerTopo>
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
                    <button
                      onClick={this.createPlaylist}
                    >+</button>
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
              <DetalhePlay
                detalhePlay={this.state.detalhePlay}
                musicasPlay={this.state.musicasPlay}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
                inputAdd={this.state.inputAdd}
                mostraInputAdd={this.mostraInputAdd}
                addTrackToPlaylist={this.addTrackToPlaylist}
                nomeTrack={this.state.nomeTrack}
                artistaTrack={this.state.artistaTrack}
                urlTrack={this.state.urlTrack}
                updateNovaTrack={this.updateNovaTrack}
                updateArtistaTrack={this.updateArtistaTrack}
                updateUrlTrack={this.updateUrlTrack}
                mostraPlayMusica={this.mostraPlayMusica}
              />     
          </main>
        </ContainerTopo>
        <Footer
          detalhePlay={this.state.detalhePlay}
          musicasPlay={this.state.musicasPlay}
          playMusica={this.state.playMusica}
          mostraPlayMusica={this.mostraPlayMusica}
          musicaTocada={this.state.musicaTocada}
        />
      </MainContainer>
    );
  }
}

export default App;
