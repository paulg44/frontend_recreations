import React from "react";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import TestSiteDisplay from "./Sites/TestSite/TestSiteDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/testSiteOne" element={<TestSiteDisplay />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
