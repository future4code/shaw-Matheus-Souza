import React from 'react'
import { GetGenres } from '../../hooks/GetGenre'
import GenderButtons from '../GenderButtons/GenderButtons'
import { Content, GenderList, MainContainer, MainText, Top } from './styled'

const HeaderHome = () => {
  const generos = GetGenres()
  return (
    <MainContainer>
      <Top>
        <p>
          TMDB
        </p>
        <div></div>
      </Top>
      <Content>
        <MainText>
          Milhões de filmes, séries e pessoas para descobrir. Explore já!
        </MainText>
        <p>FILTRE POR:</p>
        <GenderList>
          {generos.length > 0 ? generos.map((genero) => {
                return <GenderButtons key={genero.id} genero={genero}/>;
              }) : <p>Carregando generos</p>}
        </GenderList>
      </Content>
    </MainContainer>
  )
}

export default HeaderHome