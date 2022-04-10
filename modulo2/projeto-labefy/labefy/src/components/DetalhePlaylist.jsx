import React from 'react';
import styled from 'styled-components';
import play from '../img/play.png'
import pause from '../img/pause.png'

const MainContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height:80vh;
    margin: 25px;
    padding-bottom: 25px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px;
    h1{
        color:white;
        margin-left: 25px;
        margin-bottom: 0;
    }
    p{
        color:white;
        margin-left: 25px;
    }
    li{
        display:flex;
        flex-direction: row;
        align-items: center;
        margin-left: 25px;
        width: 75%;
        color:white;
        margin-bottom:5px;
        img{
            width:30px;
            margin-right: 15px;
            opacity:80%;
            :hover{
            opacity:100%;
            }
        }
        .div1{
            display:flex;
            flex-direction: row;
            justify-content:space-between;
            align-items: center;
            width: 75%;
        }
        .div2{
            display:flex;
            flex-direction: column;  
        }
        .nome{
            font-weight: bolder;
        }   
    }
    button{
        border-radius:30px;
        margin-left: 10px;
        height: 25px;
        opacity:80%;
        :hover{
            opacity:100%;
        }
    }
`
const SecondContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
`
const InputAdd = styled.div`
    display: flex;
    color: white;
    margin-left: 15px;
    margin-bottom: 15px;
    button{
        border-radius:30px;
        margin: 0 10px;
        height: 25px;
    }
    div{
        display:flex;
        flex-direction: column;
    }
    input{
        border-radius: 6px;
        margin: 2px 0;
        padding:5px;
    }
`



class DetalhePlay extends React.Component{
    render() {

        const listaTracks = this.props.musicasPlay.map((nomes) =>{
            return(
                <li>
                    {this.props.tocandoMusica === false ? (
                        <img 
                        onClick={() => this.props.mostraPlayMusica(nomes)} 
                        src={play} 
                        alt='Botão play'
                    />
                    ) : (
                        <img 
                        onClick={() => this.props.mostraPlayMusica(nomes)} 
                        src={pause} 
                        alt='Botão play'
                    />
                    )}
                    <div className='div1'>
                        <div className='div2'>
                            <span className='nome'>{nomes.name} </span>
                            <spam className='artista'>{nomes.artist}</spam>
                        </div>
                        <button
                            onClick={() => this.props.removeTrackFromPlaylist(this.props.detalhePlay.id, nomes.id)}
                        >X</button>
                    </div>
                    
                </li>
            )   
        })

        return(
                <MainContainer>
                    <SecondContainer>
                        <h1>{this.props.detalhePlay.name}</h1>
                        <p>{this.props.musicasPlay.length} Músicas</p>
                        {this.props.inputAdd === false ? (
                            <InputAdd onClick={this.props.mostraInputAdd}>
                                <button>+</button>
                                <spam> Adicionar Música</spam>
                            </InputAdd>
                            ) : (
                            <InputAdd>
                                <button 
                                    onClick={() => this.props.addTrackToPlaylist(this.props.detalhePlay.id)}
                                >+</button>
                                <div>
                                <input
                                    placeholder='Nome da música'
                                    value={this.props.nomeTrack}
                                    onChange={this.props.updateNovaTrack}
                                />
                                <input
                                    placeholder='Nome do(a) artista'
                                    value={this.props.artistaTrack}
                                    onChange={this.props.updateArtistaTrack}
                                />
                                <input
                                    placeholder='Url do áudio'
                                    value={this.props.urlTrack}
                                    onChange={this.props.updateUrlTrack}
                                />
                                </div>
                            </InputAdd>
                        )}
                        {listaTracks}
                    </SecondContainer>
                   
                </MainContainer>
            )
    }
}

export default DetalhePlay