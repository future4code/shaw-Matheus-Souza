import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardMovies from '../../components/CardMovies/CardMovies'
import HeaderDetails from '../../components/HeaderDetails/HeaderDetails'
import { GetDetails } from '../../hooks/GetDetails'
import { GetRecommendations } from '../../hooks/GetRecommendations'
import { Content, ListCast, ListRecommend, MainContainer, Trailer } from './styled'
import { GetTrailer } from '../../hooks/GetTrailer';
import {YT_base_Url} from "../../constants/YT_base_Url"
import { GetCredits } from '../../hooks/GetCredits';
import CardCast from '../../components/CardCast/CardCast';

const DetailsPage = () => {
  const location = useLocation()
  const params = useParams()
  const detalhes = GetDetails(params.id,location.pathname)
  const recomendações = GetRecommendations(params.id,location.pathname)
  const trailer = GetTrailer(params.id,location.pathname)
  const [elenco, funcionarios] = GetCredits(params.id,location.pathname)
  console.log(trailer);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "15px",
        }}
      >
        <ul style={{ 
          height: "15px",
          margin: "0px",
          padding: "0px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",}}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <MainContainer>
        <HeaderDetails detalhes={detalhes}/>
        <Content>
          <ListCast>
            <h3>
              Elenco Original
            </h3>
            <Slider {...settings}>
              {elenco.length > 0 ? elenco.map((ator) => {
                return <CardCast key={ator.id} ator={ator}/>;
              }) : <p>Carregando filmes</p>} 
            </Slider>
          </ListCast>
          <Trailer>
            <h3>
              Trailer
            </h3>
            {trailer ? 
              <iframe src={`${YT_base_Url}${trailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              :
              <div>Trailer não disponivel</div>
            }
          </Trailer>
          <ListRecommend>
            <h3>
              Recomendações
            </h3>
            <Slider {...settings}>
              {recomendações.length > 0 ? recomendações.map((filme) => {
                return <CardMovies key={filme.id} filme={filme}/>;
              }) : <p>Carregando filmes</p>} 
            </Slider>
          </ListRecommend>
        </Content>
    </MainContainer>
  )
}

export default DetailsPage