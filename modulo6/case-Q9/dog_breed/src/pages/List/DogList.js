import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Photo from '../../components/Photo/Photo';
import { GetList } from '../../hooks/GetList';
import { goToRegister } from '../../routes/coordinator';
import { BreedOptions, Header, MainContainer, PhotoList } from './styled';

const DogList = () => {
    const [breed,setBreed] = useState("chihuahua")
    const [update,setUpdate] = useState(false)
    const navigate = useNavigate()
    const lista = GetList(breed,update)
  
    const clickBreed = (event) =>{
      const raça = event.target.value
      setBreed(raça)
      setUpdate(!update)
    }
  
    useEffect(()=>{
      const token =localStorage.getItem("token");
      if(token === null || token === ""){
        goToRegister(navigate)
      }
    },[])
  
    return (
      <MainContainer>
        <Header>
          <h1>Dog Gallery</h1>
          <p>Choose a breed to see</p>
          <BreedOptions>
            <button onClick={clickBreed} value={"chihuahua"}>Chihuahua</button>
            <button onClick={clickBreed} value={"husky"}>Husky</button>
            <button onClick={clickBreed} value={"pug"}>Pug</button>
            <button onClick={clickBreed} value={"labrador"}>Labrador</button>
          </BreedOptions>
        </Header>
        <PhotoList>
          {lista.length>0 ?
          lista.map((foto)=>{
            return <Photo foto={foto}/>
          })
          :
          <></>}
        </PhotoList>
      </MainContainer>
    )
}

export default DogList