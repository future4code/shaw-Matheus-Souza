import React from 'react';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const MainContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button{
    margin:15px 0px;
  }
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>;       
      case 2:
        return <Etapa2/>;     
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
    }
  }

  pulaEtapa = () => {
    const novaEtapa = this.state.etapa +1;
    this.setState({etapa: novaEtapa });
    console.log(this.state.etapa);
    }

  render(){
    return (
      <MainContainer>
        {this.renderizaEtapa()}
        {this.state.etapa === 4 ? (
          <p></p>
          ) : (
          <button onClick={this.pulaEtapa}>Próxima etapa</button>
          )}
      </MainContainer>
    );
  }
}


export default App;
