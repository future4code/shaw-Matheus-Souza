import React, { useEffect, useState } from 'react'
import { goToDiadesorte, goToLotofacil, goToLotomania, goToQuina, goToTimemania } from '../routes/coordinator';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contest, GameName, LeftContent, LeftSide, MainContainer, Numbers, RightBackground, RightContent, RightSide } from './styled';
import logo from "../logo.png"
import { GetLoterias } from "../hooks/GetLoteria"
import { GetConcursos } from '../hooks/GetConcursos';
import { GetNumeros } from '../hooks/GetNumeros';
import NumeroSorteado from '../components/Sorteio/Sorteio';
import moment from 'moment';

const MegaPage = () => {
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
      case "quina":
        goToQuina(navigate);
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
      setCurrentPage("mega-sena")
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
    <MainContainer color={currentLocation}>
      <LeftSide>
        <LeftContent>
          <select  name="select" onChange={onChangePage}>
            <option value="mega-sena">MEGA-SENA</option>
            <option value="quina">QUINA</option>
            <option value="lotofácil">LOTOFÁCIL</option>
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
          <Contest>
            {numeros.length > 0 ? 
              <div>
                <p>Consurso</p>
                <p>{infs.id} - {moment(infs.data).format("DD/MM/YYYY")}</p>
              </div>
             : <p>Carregando dados</p>}
          </Contest>
        </LeftContent>
      </LeftSide>
      <RightSide>
        <RightBackground/>
        <RightContent>
          <Numbers>
            {numeros.length > 0 ? numeros.map((numero) => {
              return <NumeroSorteado key={numero.numero} numero={numero}/>;
            }) : <p>Carregando números</p>}
          </Numbers>
          <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</p>
        </RightContent>
      </RightSide>
    </MainContainer>
  )
}

export default MegaPage