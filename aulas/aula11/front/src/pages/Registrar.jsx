import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Registrar() {
  const navigate = useNavigate();

  const { registrar } = useContext(AuthContext);

  const onSalvar = () => {
    registrar({ email: "jose@iesb.br", senha: "abc1234" });
    navigate("/home");
  };

  return (
    <>
      <h1>Registrar</h1>
      <button onClick={onSalvar}>Salvar</button>
    </>
  );
}

export default Registrar;
