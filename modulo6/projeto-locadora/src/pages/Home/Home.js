import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CardMovies from '../../components/CardMovies/CardMovies'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import { GetMovieList } from '../../hooks/GetMovieList'
import { goToHome, goToHomePages } from '../../routes/coordinator'
import { DivTeste, MainContainer, MoviesList } from './styled'

const Home = () => {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const filmes1 = GetMovieList(1,location.pathname)
  const filmesPages = GetMovieList(params.page,location.pathname)

  return (
    <MainContainer>
        <HeaderHome/>
          {location.pathname === "/" ?
          <MoviesList>
            {filmes1.length > 0 ? filmes1.map((filme) => {
                return <CardMovies key={filme.id} filme={filme}/>;
              }) : <p>Carregando filmes</p>}
          </MoviesList>
          :
          <MoviesList>
            {filmesPages.length > 0 ? filmesPages.map((filme) => {
                return <CardMovies key={filme.id} filme={filme}/>;
              }) : <p>Carregando filmes</p>}
          </MoviesList>
          }

          <DivTeste>
            <p onClick={()=>goToHome(navigate)}>1</p>
            <p onClick={()=>goToHomePages(navigate,2)}>2</p>
            <p onClick={()=>goToHomePages(navigate,3)}>3</p>
            <p onClick={()=>goToHomePages(navigate,4)}>4</p>
            <p onClick={()=>goToHomePages(navigate,5)}>5</p>
            <p onClick={()=>goToHomePages(navigate,6)}>6</p>
          </DivTeste>   
    </MainContainer>
  )
}

export default Home