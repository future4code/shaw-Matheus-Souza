import React from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  return (
    <MainContainer>
        <HeaderDetails detalhes={detalhes}/>
        <ListRecommend>
          <Slider {...settings}>
            {recomendações.length > 0 ? recomendações.map((filme) => {
              return <CardMovies key={filme.id} filme={filme}/>;
            }) : <p>Carregando filmes</p>} 
          </Slider>
        </ListRecommend>
    </MainContainer>
  )
}

export default DetailsPage