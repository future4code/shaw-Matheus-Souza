import moment from 'moment'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { CardsDetails, CardsHome, MainContainer } from './styled'
import {image_Url} from "../../constants/image_Url"
import { goToDetails } from '../../routes/coordinator'

const CardMovies = (filme) => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <MainContainer location={location.pathname}>
          <img src={`${image_Url}/${filme.filme.poster_path}`} alt="Poster" onClick={()=>goToDetails(navigate,filme.filme.id)}/>
          <p><strong>{filme.filme.title}</strong></p>
          <p>{moment(filme.filme.release_date).format("DD/MM/YYYY")}</p>
    </MainContainer>
  )
}

export default CardMovies