import React, { useEffect, useState } from 'react'
import { goToDiadesorte, goToLotofacil, goToLotomania, goToQuina, goToTimemania } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const MegaPage = () => {
  const [currentPage,setCurrentPage] = useState("")
  const navigate = useNavigate()
  console.log(currentPage)

  const onChangePage = (event) => {
    setCurrentPage(event.target.value);
  };

  useEffect(()=>{
    switch(currentPage){
      case "quina":
        goToQuina(navigate);
        break;
      case "lotofacil":
        goToLotofacil(navigate);
        break;
      case "lotomania":
        goToLotomania(navigate);
        break;
      case "timemania":
        goToTimemania(navigate);
        break;
      case "diadesorte":
        goToDiadesorte(navigate);
        break;
      default: 
    }
  // eslint-disable-next-line
  },[currentPage])

  return (
    <div>
      MegaPage
      <select  name="select" onChange={onChangePage}>
        <option value="mega">MEGA-SENA</option>
        <option value="quina">QUINA</option>
        <option value="lotofacil">LOTOFÁCIL</option>
        <option value="lotomania">LOTOMANIA</option>
        <option value="timemania">TIMEMANIA</option>
        <option value="diadesorte">DIA DE SORTE</option>        
      </select>
    </div>
  )
}

export default MegaPage