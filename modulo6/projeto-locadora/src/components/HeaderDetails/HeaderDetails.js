import moment from 'moment'
import React from 'react'
import { image_Url } from '../../constants/image_Url'
import { GetGenres } from '../../hooks/GetGenre'
import GenderButtons from '../GenderButtons/GenderButtons'
import { Content, MainContainer, Overview, PosterBox, TextBox, Title, Top } from './styled'

const HeaderDetails = (detalhes) => {
  const generos = GetGenres()
  console.log(detalhes.detalhes);
  return (
    <MainContainer>
      <Top>
        <p>
          TMDB
        </p>
        <div></div>
      </Top>
      <Content>
        <PosterBox>
          <img src={`${image_Url}/${detalhes.detalhes.poster_path}`}/>
        </PosterBox>
        <TextBox>
          <Title>
            <strong>{detalhes.detalhes.title} ({moment(detalhes.detalhes.release_date).format("YYYY")})</strong>
            {/* <p>FILTRE POR:</p> */}
          </Title>
          <Overview>
            <strong> Sinopse </strong>
            <p>{detalhes.detalhes.overview}</p>
          </Overview>
        </TextBox>
      </Content>
    </MainContainer>
  )
}

export default HeaderDetails