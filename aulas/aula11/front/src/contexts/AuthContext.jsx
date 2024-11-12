import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    email: null,
    logado: false,
    token: null,
  });

  const login = (dados) => {
    if (dados.email === "jose@iesb.br" && dados.senha === "abc1234") {
      setUsuario({
        email: dados.email,
        logado: true,
        token: "1a2b3c4d",
      });
      return "";
    } else {
      return "Login inválido";
    }
  };

  const logout = () => {
    setUsuario({
      email: null,
      logado: false,
      token: null,
    });
  };

  const registrar = (dados) => {
    setUsuario({
      email: dados.email,
      logado: true,
      token: "1a2b3c4d",
    });
  };

  const context = { usuario, login, logout, registrar };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
