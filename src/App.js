// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import OddsList from "./components/OddsList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baseball" element={<OddsList sport="baseball_mlb" />} />
          <Route
            path="/basketball"
            element={<OddsList sport="basketball_nba" />}
          />
          <Route
            path="/football"
            element={<OddsList sport="americanfootball_nfl" />}
          />
          <Route path="/soccer" element={<OddsList sport="soccer_epl" />} />
          <Route path="/tennis" element={<OddsList sport="tennis_atp" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
