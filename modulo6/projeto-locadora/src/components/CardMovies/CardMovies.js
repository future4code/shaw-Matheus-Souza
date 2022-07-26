import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContainer } from './styled'
import {image_Url} from "../../constants/image_Url"
import { goToDetails } from '../../routes/coordinator'

const CardMovies = (filme) => {
  const navigate = useNavigate()
    // console.log(filme.filme)
  return (
    <MainContainer>
        <img src={`${image_Url}/${filme.filme.poster_path}`} onClick={()=>goToDetails(navigate,filme.filme.id)}/>
        <p><strong>{filme.filme.title}</strong></p>
        <p>{moment(filme.filme.release_date).format("DD/MM/YYYY")}</p>
    </MainContainer>
  )
}

export default CardMovies