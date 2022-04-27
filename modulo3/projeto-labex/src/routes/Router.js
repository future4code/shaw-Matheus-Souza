import React from 'react'
import PaginaInicial from '../pages/PaginaInicial/PaginaInicial'
import PaginaGerenciar from '../pages/PaginaGerenciar/PaginaGerenciar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<PaginaInicial/>}/>
            <Route path="/:page" element={<PaginaGerenciar/>}/>
            <Route path="/gerenciar/:modal" element={<PaginaGerenciar/>}/>
            <Route path="index/:modal" element={<PaginaInicial/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router