import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './App.css'
import PagInicial from './pages/PagInicial/PagInicial';
import Matches from './pages/Matches/Matches';


function App() {

  return (
    <div className='App'>
      <div className='MainContainer'>
        <PagInicial/> 
        <Matches>
          
        </Matches>
      </div>
    </div>
  )
}

export default App