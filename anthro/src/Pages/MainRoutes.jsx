import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../component/HomePage";
import Clothe from "./Clothe";



const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/clothe" element={<Clothe/>} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
