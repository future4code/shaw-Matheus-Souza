import React from "react";
import { Route, Routes } from "react-router-dom";
import DiaDeSortePage from "../pages/DiaDeSortePage";
import ErrorPage from "../pages/ErrorPage";
import LotofacilPage from "../pages/LotofacilPage";
import LotomaniaPage from "../pages/LotomaniaPage";
import MegaPage from "../pages/MegaPage";
import QuinaPage from "../pages/QuinaPage";
import TimemaniaPage from "../pages/TimemaniaPage";

const Router = () => {
    return (
        <Routes>
          <Route index element={<MegaPage />} />
          <Route path="/quina" element={<QuinaPage />} />
          <Route path="/lotofacil" element={<LotofacilPage />} />
          <Route path="/lotomania" element={<LotomaniaPage />} />
          <Route path="/timemania" element={<TimemaniaPage />} />
          <Route path="/diadesorte" element={<DiaDeSortePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>   
    );
  };
  export default Router;