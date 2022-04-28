import React from 'react'
import PaginaInicial from '../pages/PaginaInicial/PaginaInicial'
import PaginaGerenciar from '../pages/PaginaGerenciar/PaginaGerenciar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<PaginaInicial/>}/>
            <Route path="index/:modal" element={<PaginaInicial/>}/>
            <Route path="/logado/:modal" element={<PaginaInicial/>}/>
            <Route path="/logado//:page" element={<PaginaGerenciar/>}/>
            <Route path="/:log" element={<PaginaInicial/>}/>
            <Route path="/logado/gerenciar/:modal" element={<PaginaGerenciar/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router