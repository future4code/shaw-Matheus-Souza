import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false, //faz iniciar com o coração branco
    numeroCurtidas: 0, //numero de curtidas inicial
    comentando: false, // no false a caixa para comentar fica escondida
    numeroComentarios: 0 // numero de comentarios inicial
  }

  onClickCurtida = () => {
    this.setState({   
      curtido: !this.state.curtido, // inverte o estado do coração ao clicar
      numeroCurtidas: this.state.numeroCurtidas + 1, // adiciona 1 no contator
    })
    if(this.state.numeroCurtidas){ // se o numero de curtidas não for 0, ira subitrair 1
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas -1,
      })
    }
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1     
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) { //se comentando não for false 
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/> // ira mostrar a seção de comentario, com o input
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={`https://picsum.photos/50/50${this.props.fotoUsuario}`} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={`https://picsum.photos/550/50${this.props.fotoPost}`} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post