<<<<<<< HEAD
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";

function Registrar() {
  const [msg, setMsg] = useState("");

=======
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Registrar() {
>>>>>>> 7634e8f2dba6da2671135da60f91bd16e55b996c
  const navigate = useNavigate();

  const { registrar } = useContext(AuthContext);

<<<<<<< HEAD
  const onSalvar = async (data) => {
    const erro = await registrar(data);
    if (!erro) {
      setMsg("");
      navigate("/home");
    } else {
      setMsg(erro);
    }
=======
  const onSalvar = () => {
    registrar({ email: "jose@iesb.br", senha: "abc1234" });
    navigate("/home");
>>>>>>> 7634e8f2dba6da2671135da60f91bd16e55b996c
  };

  return (
    <>
      <h1>Registrar</h1>
<<<<<<< HEAD

      {msg && <p>{msg}</p>}
      <Formulario onEnviar={onSalvar} texto="Confirmar" />
      <Link to="/login">Voltar</Link>
=======
      <button onClick={onSalvar}>Salvar</button>
>>>>>>> 7634e8f2dba6da2671135da60f91bd16e55b996c
    </>
  );
}

export default Registrar;
