import moment from 'moment'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom'
import { image_Url } from '../../constants/image_Url'
import { GetGenres } from '../../hooks/GetGenre'
import { goToHome } from '../../routes/coordinator'
import GenderButtons from '../GenderButtons/GenderButtons'
import { Content, Genres, Grafico, MainContainer, Overview, PosterBox, Subtitle, TextBox, Title, Top, Triangulo } from './styled'

const HeaderDetails = (detalhes) => {
  const navigate = useNavigate()
  // const generos = GetGenres()
  console.log(detalhes.detalhes);

  const generos = detalhes.detalhes.genres

  const convertMinsToHrsMins = ((minutes)=>{
    let h = Number(Math.floor(minutes / 60));
    let m = Number(minutes % 60);
    h = h < 10 ? '0' + h : h; 
    m = m < 10 ? '0' + m : m; 
    return `${h}h ${m}m`;
  })

  const nota = Number(detalhes.detalhes.vote_average)
  const notaRestante = Number(10-nota)

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['Nota', ''],
    hidden: true,
    datasets: [
      {
        label: '# of Votes',
        data: [nota, notaRestante],
        backgroundColor: [
          '#14FF00',
          'rgba(255, 255, 255, 0.1)',
        ],
        borderColor: [
          '#14FF00',
          'rgba(255, 255, 255, 0.1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <MainContainer>
      <Top>
        <p>
          TMDB
        </p>
        <div onClick={()=>goToHome(navigate)}></div>
      </Top>
      <Content>
        <PosterBox>
          <img src={`${image_Url}/${detalhes.detalhes.poster_path}`}/>
        </PosterBox>
        <TextBox>
          {detalhes.detalhes.title ? 
          <Title>
          <h2>{detalhes.detalhes.title} ({moment(detalhes.detalhes.release_date).format("YYYY")})</h2>
          <Subtitle>
            <p>{moment(detalhes.detalhes.release_date).format("DD/MM/YYYY")} ({detalhes.detalhes.original_language.toUpperCase()}) • 
            </p>
            {generos.map((genero) => {
              return <p>{genero.name} • </p>
            })}
            <p> {convertMinsToHrsMins(detalhes.detalhes.runtime)} </p>
          </Subtitle>
          <Grafico>
            <Doughnut data={data}/>
            <p>Avaliação dos usuários</p>
          </Grafico>
          {/* <Triangulo></Triangulo> */}
          </Title>
          :
            <div>Carregando informações</div>
          }
          
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