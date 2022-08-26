import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error/Error";
import DogList from "../pages/List/DogList";
import Register from "../pages/Register/Register";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Register/>}/>
      <Route path="/doglist" element={<DogList/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
};

export default Router; 