import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import  Erro404  from "./pages/Erro404";
import { useState } from "react";

export default function App(props) {
  const [logado, setLogado] = useState(false);

  function handleLogin(event) {
    console.log("agora ta logado")
    setLogado(true)
  }

  function handleLougout(event) {
    setLogado(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        {logado ?
        <>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil/>} />
        </>  
        :
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        }
        <Route path="*" element={<Erro404/> } />
      </Routes>
    </BrowserRouter>
  );
}
