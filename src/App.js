import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import About from "./screens/About";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import CreateBoard from "./screens/CreateBoard";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-board" element={<CreateBoard />} />
        <Route element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
