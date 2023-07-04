import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

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
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Container>
                <Home />
              </Container>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/about"
          element={
            isAuth ? (
              <Container>
                <About />
              </Container>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/settings"
          element={
            isAuth ? (
              <Container>
                <Settings />
              </Container>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/boards"
          element={
            isAuth ? (
              <Container>
                <Boards />
              </Container>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/create-board"
          element={
            isAuth ? (
              <Container>
                <CreateBoard />
              </Container>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/sign-up"
          element={
            isAuth ? (
              <Container>
                <SignUp />
              </Container>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
