import React from 'react'
import { useParams } from 'react-router-dom'
import CardMovies from '../../components/CardMovies/CardMovies'
import HeaderDetails from '../../components/HeaderDetails/HeaderDetails'
import { GetDetails } from '../../hooks/GetDetails'
import { GetRecommendations } from '../../hooks/GetRecommendations'
import { ListRecommend, MainContainer } from './styled'

const DetailsPage = () => {
  const params = useParams()
  const detalhes = GetDetails(params.id)
  const recomendações = GetRecommendations(params.id)
  // console.log(detalhes);
  return (
    <MainContainer>
        <HeaderDetails detalhes={detalhes}/>
        DetailsPage
        <ListRecommend>
          {recomendações.length > 0 ? recomendações.map((filme) => {
            return <CardMovies key={filme.id} filme={filme}/>;
          }) : <p>Carregando filmes</p>} 
        </ListRecommend>
    </MainContainer>
  )
}

export default DetailsPage