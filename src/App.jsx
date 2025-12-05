import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./assets/NavBar";
import Home from "./assets/Home";
import Chatbot from "./assets/ChatBot";
import Features from "./assets/Features";
import Levels from "./assets/Levels";
import Leaderboard from "./assets/Leaderboard";
import Playground from "./assets/Playground";
import Login from "./assets/Login";
import Profile from "./assets/Profile";

import Level1 from "./assets/Level1";
import Level2 from "./assets/Level2";
import Level3 from "./assets/Level3";
import Level4 from "./assets/Level4";
import Level5 from "./assets/Level5";
import Level6 from "./assets/Level6";
import Level7 from "./assets/Level7";
import Level8 from "./assets/Level8";
import Level9 from "./assets/Level9";
import Level10 from "./assets/Level10";


function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/chatbot" element={<Chatbot />} />

        {/* Level pages */}
        <Route path="/Level1" element={<Level1 />} />
        <Route path="/Level2" element={<Level2 />} />
        <Route path="/Level3" element={<Level3 />} />
        <Route path="/Level4" element={<Level4 />} />
        <Route path="/Level5" element={<Level5 />} />
        <Route path="/Level6" element={<Level6 />} />
        <Route path="/Level7" element={<Level7 />} />
        <Route path="/Level8" element={<Level8 />} />
        <Route path="/Level9" element={<Level9 />} />
        <Route path="/Level10" element={<Level10 />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
