import React, {useState} from 'react'
import PagInicial from './pages/PagInicial/PagInicial';
import Matches from './pages/Matches/Matches';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import {AppMain,MainContainer,Header,TelaMatch, TelaInicio} from './styled'

function App() {
  const [telaInicial,setTelaInicial] = useState(true)

  const telaMatch = () => {
    setTelaInicial(false)
  }
  const telaInicio = () => {
    setTelaInicial(true)
  }

  return (
    <AppMain>
      <MainContainer>
        <Header>
          <h2>LabMatch</h2>
          {telaInicial ? 
          <TelaMatch>
            <DoneAllRoundedIcon onClick={telaMatch} color='success'/>
          </TelaMatch> 
          : 
          <TelaInicio>
            <KeyboardReturnRoundedIcon onClick={telaInicio}/>
          </TelaInicio>}
        </Header>
        {telaInicial ? 
        <PagInicial/> : <Matches/>}
      </MainContainer>
    </AppMain>
  )
}

export default App