import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
<<<<<<< HEAD
import Formulario from "./Formulario";

function Registrar() {
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const onConfirmar = async (data) => {
    const resultado = await signup(data);
    if (resultado) {
      setErro(resultado);
    } else {
      setErro("");
      navigate("/home");
    }
  };

  return (
    <>
      <h1>Registrar</h1>
      {erro && <p>{erro}</p>}
      <Formulario onEnviar={onConfirmar} texto="Confirmar" />
      <Link to="/login">Voltar</Link>
    </>
  );
}

export default Registrar;
=======

function Registrar() {
    const [erro, setErro] = useState("");  //letra e da atividade 9
    return (
        <h1>Registrar</h1>
    );
}

export default Registrar;
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6
