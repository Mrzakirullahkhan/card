


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:index" element={<Detail />} />
    </Routes>
  );
}

export default App;


