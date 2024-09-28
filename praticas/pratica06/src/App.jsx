import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  const [rota, setRota] = useState("/login");
  const mudaRota = (url) => {
    setRota(url);
    {rota == "/login" && <Login />}
    {rota == "/home" && <Home />}
    {rota == "/perfil" && <Perfil />}
  }
  return (
    <>
    <Login navegaPara={mudaRota} />
    <Home navegaPara={mudaRota} />
    <Perfil navegaPara={mudaRota} /> 
    </>
  );
}

export default App;