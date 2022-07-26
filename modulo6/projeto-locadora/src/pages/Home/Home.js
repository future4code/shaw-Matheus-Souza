import React from 'react'
import CardMovies from '../../components/CardMovies/CardMovies'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import { GetMovieList } from '../../hooks/GetMovieList'
import { MainContainer, MoviesList } from './styled'

const Home = () => {
  const filmes = GetMovieList(1)
  // console.log(filmes)
  return (
    <MainContainer>
        <HeaderHome/>
        <MoviesList>
          {filmes.length > 0 ? filmes.map((filme) => {
              return <CardMovies key={filme.id} filme={filme}/>;
            }) : <p>Carregando filmes</p>}
        </MoviesList>
        Home
    </MainContainer>
  )
}

export default Home