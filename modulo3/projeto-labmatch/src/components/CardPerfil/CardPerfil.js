import {MainContainer, Background} from './style'

function CardPerfil(props) {

  return (
    <MainContainer >
        <Background src={props.perfil.photo}/>
        <img src={props.perfil.photo}></img>
        <div className='dadosPerfil' >
            <div className='NomeIdade'>
                <h2>{props.perfil.name},  </h2>
                <p>{props.perfil.age} anos</p>
            </div>
            <p>{props.perfil.bio}</p>
        </div>
    </MainContainer>
  )
}

export default CardPerfil