import React, { useEffect } from "react";
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
import Board from "./screens/Board";
import { useUser } from "./hooks/useUser";

function App() {
  const { isAuth, setIsAuth } = useUser();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  });
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
          path="/board/:id"
          element={
            isAuth ? (
              <Container>
                <Board />
              </Container>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/register"
          element={!isAuth ? <SignUp /> : <Navigate replace to="/" />}
        />
        <Route
          path="/login"
          element={!isAuth ? <Login /> : <Navigate replace to="/" />}
        />
        <Route element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
