import React, { useEffect, useState } from 'react'
import { goToDiadesorte, goToLotomania, goToMega, goToQuina, goToTimemania } from '../routes/coordinator';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contest, GameName, LeftContent, LeftSide, MainContainer, Numbers, RightBackground, RightBackgroundHoriz, RightContent, RightSide, Texto } from './styled';
import logo from "../assets/logo.png"
import loto_bk from "../assets/loteria_bk.png"
import loto_horiz from "../assets/loteria_horiz.png"
import { GetLoterias } from "../hooks/GetLoteria"
import { GetConcursos } from '../hooks/GetConcursos';
import { GetNumeros } from '../hooks/GetNumeros';
import NumeroSorteado from '../components/Sorteio/Sorteio';
import moment from 'moment';

const LotofacilPage = () => {
  const [currentPage,setCurrentPage] = useState("")
  const [currentLocation, setCurrentLocation] = useState("")
  const loterias = GetLoterias()
  const concursos = GetConcursos()
  const [concurso, setConsurso] = useState({})
  const [loteria, setLoteria] = useState({})
  const [numeros,infs] = GetNumeros(concurso.concursoId,concurso)
  const navigate = useNavigate()
  const location = useLocation()

  console.log(numeros);

  const onChangePage = (event) => {
    setCurrentPage(event.target.value);
  };
  
  useEffect(()=>{
    switch(currentPage){
      case "mega-sena":
        goToMega(navigate);
        break;
      case "quina":
        goToQuina(navigate);
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
      setCurrentPage("lotofácil")
    }
  // eslint-disable-next-line
  setCurrentLocation(location.pathname);
  },[currentPage])

  useEffect(()=>{
    const loteria = loterias.find((loteria) => {
      return loteria.nome === currentPage
    })
    setLoteria(loteria)
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
    <MainContainer >
      <LeftSide color={currentLocation}>
        <LeftContent>
          <select  name="select" onChange={onChangePage}>
            <option value="lotofácil">LOTOFÁCIL</option>
            <option value="mega-sena">MEGA-SENA</option>
            <option value="quina">QUINA</option>
            <option value="lotomania">LOTOMANIA</option>
            <option value="timemania">TIMEMANIA</option>
            <option value="dia de sorte">DIA DE SORTE</option>        
          </select>
          <GameName>
            <img src={logo} alt="Logo do jogo"/>
            {numeros.length > 0 ? 
              <p> {loteria.nome.toUpperCase()} </p>
             : <p>...</p>}
          </GameName>
            {numeros.length > 0 ? 
              <Contest>
                <p>Consurso</p>
                <p><strong>{infs.id} - {moment(infs.data).format("DD/MM/YYYY")}</strong></p>
              </Contest>
             : <p>Carregando dados</p>}
        </LeftContent>
        <RightBackground src={loto_bk}/>
        <RightBackgroundHoriz src={loto_horiz}/>
      </LeftSide>
      <RightSide>
        <RightContent>
          <Numbers>
            {numeros.length > 0 ? numeros.map((numero) => {
              return <NumeroSorteado key={numero.numero} numero={numero}/>;
            }) : <p>Carregando números</p>}
          </Numbers>
          <Texto>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</Texto>
        </RightContent>
      </RightSide>
    </MainContainer>
  )
}

export default LotofacilPage