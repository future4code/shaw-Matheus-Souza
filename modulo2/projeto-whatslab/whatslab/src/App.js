import React from 'react';
import styled from 'styled-components'
import background from './img/whatsapp-background.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
const ContainerWhats = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 100%;
  border: 3px solid black;
  border-radius: 10px;
  background-color: greenyellow;
  background-image: url(https://i.pinimg.com/474x/40/39/e0/4039e0f1ef08b7b965bacb4641a7af49--wallpaper-whatsapp-whatsapp-background.jpg);
  h1{
    color: white;
  }
`
const ChatBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  text-align: flex-start;
  height: 80vh;  
  p{
    padding: 0 15px;
  }
`
const BalaoMsgEu = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  position:relative;
  background-color: white;
  opacity: 70%;
  box-shadow:5px 10px black;
  /* border-radius: 10px; */
  margin: 5px 10px;
  max-width: 60%;
  min-width: 8%; 
  border-radius: 0.5em;
  font-weight: 450;
  .p1{
    font-weight: bolder;
    color: limegreen;
    margin-bottom: 0px;
  }
  .p2{
    word-wrap: break-word;
  }
  &:after {
	content: '';
	border: 15px solid transparent;
	border-top-color: white;
  position: absolute;
  top: 0px;
  right: -8px;
}
`
const BalaoMsgOutros = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  position:relative;
  background-color: lightgreen;
  opacity: 70%;
  box-shadow:-5px 10px black;
  /* border-radius: 10px; */
  margin: 5px 10px;
  max-width: 60%;
  min-width: 8%; 
  border-radius: 0.5em;
  font-weight: 450;
  .p1{
    font-weight: bolder;
    color: blue;
    margin-bottom: 0px;
  }
  .p2{
    word-wrap: break-word;
  }
  &:after {
	content: '';
	border: 15px solid transparent;
	border-top-color: lightgreen;
  position: absolute;
  top: 0px;
  left: -8px;
}
`

const Inputs = styled.div`
  display: flex;
  width:100%;
  justify-content: space-between;
  background-color: #1E4545;
  padding: 15px 0;
  .input1{
  width: 20%;
  border: 1px solid black;
  border-radius: 8px;
  margin: 0 5px;
  padding: 6px 5px;
  opacity:75%;
  }
  .input2{
  width: 60%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 6px 5px;
  opacity:75%;
  }
  button{
  width: 20%;
  border: 2px solid black;
  border-radius: 8px;
  margin: 0 5px;
  padding: 6px 5px;
  }
  :hover button{
  background-color: lightblue;
}
`

class App extends React.Component {
  state = {
    chat:[],
    inputNome: "",
    inputComentario: ""
  }

  adicionarComentario = () => {

    const novoComentario = {
      nome: this.state.inputNome,
      comentario: this.state.inputComentario
    };
    const novaListaChat = [novoComentario,...this.state.chat];

    this.setState({chat: novaListaChat})
    this.setState({ inputNome: "" });
    this.setState({ inputComentario: "" });
  };
  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputComentario = (event) => {
    this.setState({ inputComentario: event.target.value });
  };
  


  render() {

    const listaChat = this.state.chat.map((mensagem) => {
      if (mensagem.nome === "Eu"){
        return(
          <BalaoMsgEu>
            <p className='p2'>{mensagem.comentario}</p>
        </BalaoMsgEu>
        )
      } else {
          return(
           <BalaoMsgOutros>
              <p className='p1'>{mensagem.nome}</p>
              <p className='p2'>{mensagem.comentario}</p>
           </BalaoMsgOutros>
          )
      }   
    })

    return (
      <MainContainer>
        <ContainerWhats>
          <h1>WhatsLab</h1>
          <ChatBox>
              {listaChat}
          </ChatBox>
          <Inputs>
            <input className='input1'
              value={this.state.inputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
              onKeyPress={event => {
                if(event.key === 'Enter') {
                  this.adicionarComentario()
                }}}
            />
            <input className='input2'
              value={this.state.inputComentario}
              onChange={this.onChangeInputComentario}
              placeholder={"Mensagem"}
              onKeyPress={event => {
                if(event.key === 'Enter') {
                  this.adicionarComentario()
                }}}
            />
            <button onClick={this.adicionarComentario}>Enviar</button>
          </Inputs>
        </ContainerWhats>
      </MainContainer>
    );
  } 
}

export default App;
