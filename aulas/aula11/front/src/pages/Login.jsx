import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import Formulario from "./Formulario";

function Login() {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");
<<<<<<< HEAD
 
  const { login } = useContext(AuthContext);

  const onEntrar = async (data) => {
    const erro = await login(data);
=======

  const { login } = useContext(AuthContext);

  const onEntrar = (data) => {
    const erro = login(data);
>>>>>>> 7634e8f2dba6da2671135da60f91bd16e55b996c
    if (!erro) {
      setMsg("");
      navigate("/home");
    } else {
      setMsg(erro);
    }
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 7634e8f2dba6da2671135da60f91bd16e55b996c

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <Formulario onEnviar={onEntrar} texto="Entrar" />
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;

