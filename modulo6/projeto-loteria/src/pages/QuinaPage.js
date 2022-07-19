import React, { useEffect, useState } from 'react'
import { goToDiadesorte, goToLotofacil, goToLotomania, goToMega, goToTimemania } from '../routes/coordinator';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contest, GameName, LeftContent, LeftSide, MainContainer, RightSide } from './styled';
import logo from "../logo.png"
import { GetLoterias } from '../hooks/GetLoteria';
import { GetConcursos } from '../hooks/GetConcursos';

const QuinaPage = () => {
  const [currentPage,setCurrentPage] = useState("")
  const [currentLocation, setCurrentLocation] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const loterias = GetLoterias()
  const concursos = GetConcursos()
  const [concurso, setConsurso] = useState({})

  const onChangePage = (event) => {
    setCurrentPage(event.target.value);
  };

  useEffect(()=>{
    switch(currentPage){
      case "mega-sena":
        goToMega(navigate);
        break;
      case "lotofácil":
        goToLotofacil(navigate);
        break;
      case "lotomania":
        goToLotomania(navigate);
        break;
      case "timemania":
        goToTimemania(navigate);
        break;
      case "dia de sorte":
        goToDiadesorte(navigate);
        break;
      default:
        setCurrentPage("quina")
    }
    setCurrentLocation(location.pathname)
  // eslint-disable-next-line
  },[currentPage])

  useEffect(()=>{
    const loteria = loterias.find((loteria) => {
      return loteria.nome === currentPage
    })
    console.log(loteria);
    if(concursos?.length > 0 && loterias?.length>0){
      const filtroConcurso = concursos.find((concurso) => {
        return concurso.loteriaId === loteria.id
      })
      setConsurso(filtroConcurso)
    }
    console.log(concurso);
  },[loterias,concursos,currentPage])

  return (
    <MainContainer color={currentLocation}>
      <LeftSide>
        <LeftContent>
          <select  name="select" onChange={onChangePage}>
            <option value="quina">QUINA</option>
            <option value="mega-sena">MEGA-SENA</option>
            <option value="lotofácil">LOTOFÁCIL</option>
            <option value="lotomania">LOTOMANIA</option>
            <option value="timemania">TIMEMANIA</option>
            <option value="dia de sorte">DIA DE SORTE</option>        
          </select>
          <GameName>
            <img src={logo} alt="Logo do jogo"/>
            <p> QUINA </p>
          </GameName>
          <Contest>
            <p>Consurso</p>
            <p>4531 - 07/04/2020</p>
          </Contest>
        </LeftContent>
      </LeftSide>
      <RightSide>
          <p>Numeros</p>
          <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</p>
      </RightSide>
    </MainContainer>
  )
}

export default QuinaPage