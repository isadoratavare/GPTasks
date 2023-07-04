import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import About from "./screens/About";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import CreateBoard from "./screens/CreateBoard";
import NotFound from "./screens/NotFound";
import Container from "./components/Container";
import Settings from "./screens/Settings";
import Boards from "./screens/Boards";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-board" element={<CreateBoard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/boards" element={<Boards />} />
          <Route element={NotFound} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
