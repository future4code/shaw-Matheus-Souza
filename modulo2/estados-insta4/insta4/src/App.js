import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={1}
          fotoPost={1}
        />
        <Post
          nomeUsuario={'Matheus'}
          fotoUsuario={2}
          fotoPost={2}
        />
        <Post
          nomeUsuario={'Mari'}
          fotoUsuario={3}
          fotoPost={3}
        />
      </MainContainer>
    );
  }
}

export default App;
