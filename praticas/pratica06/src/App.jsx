import { useState } from "react";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";

function App() {
  const [rota, setRota] = useState("/login");
  const mudaRota = (url) => {
    setRota(url);
    {
      rota == "/login" && <Login />;
    }
    {
      rota == "/home" && <Home />;
    }
    {
      rota == "/perfil" && <Perfil />;
    }
  };
  return (
    <>
      {rota == "/login" && <Login navegaPara={mudaRota} />}
      {rota == "/home" && <Home navegaPara={mudaRota} />}
      {rota == "/perfil" && <Perfil navegaPara={mudaRota} />}
    </>
  );
}

export default App;
