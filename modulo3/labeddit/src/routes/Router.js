import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Feed from '../pages/Feed/Feed'
import Post from '../pages/Post/Post'
import Home from "../pages/Home/Home";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
};