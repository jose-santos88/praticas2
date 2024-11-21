import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
<<<<<<< HEAD
import AuthContext from "../pages/Formulario";
import Formulario from "../pages/Formulario";
=======
import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6

function Login() {
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onEntrar = async (data) => {
    const resultado = await login(data);
    if (resultado) {
      setErro(resultado);
    } else {
      setErro("");
      navigate("/home");
    }
  };

  return (
    <>
      <h1>Login</h1>
<<<<<<< HEAD
      {erro && <p>{erro}</p>}
=======
      {erro && <p>{errp}</p>}
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6
      <Formulario onEnviar={onEntrar} texto="Entrar" />
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;
