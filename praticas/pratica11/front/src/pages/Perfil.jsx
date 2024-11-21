import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AutContext from "../contexts/AuthContext";
import Menu from "../components/Menu";
import Formulario from "../pages/Formulario";

function Perfil() {
  const [erro, setErro] = useState("");
  const { id } = useParams();
  const { usuario, update } = useContext(AutContext);
  const onSalvar = async (data) => {
    const resultado = await update({ id, ...data });
    if (resultado) {
      setErro(resultado);
    } else {
      setErro("");
    }
  };
  return (
    <>
      <header>
        <Menu />
      </header>
      <h1>Perfil</h1>
      {erro && <p>{erro}</p>}
      <Formulario onEnviar={onSalvar} texto="Salvar" />
    </>
  );
}

export default Perfil;
