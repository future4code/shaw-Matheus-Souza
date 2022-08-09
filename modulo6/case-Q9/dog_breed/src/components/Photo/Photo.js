import React, { useState } from 'react'
import { DogPhoto, MainContainer, ModalContent, PhotoModal } from './styled'

const Photo = (props) => {
    const [mostar,setMostrar] = useState(false)

    const ClickPhoto = () =>{
        setMostrar(true)
    }
    const ClickX = () =>{
        setMostrar(false)
    }

  return (
    <MainContainer>
        <DogPhoto src={`${props.foto}`} alt="Dog" onClick={ClickPhoto}/>
            {mostar === true ? 
                <PhotoModal>
                    <ModalContent> 
                        <button onClick={ClickX}>X</button>
                        <img src={`${props.foto}`} alt="Dog"/>
                    </ModalContent>
                </PhotoModal>
            : null}
    </MainContainer>
  )
}

export default Photo