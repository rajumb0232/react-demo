import React from "react";
import RegisterPage from "./RegisterPage ";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
