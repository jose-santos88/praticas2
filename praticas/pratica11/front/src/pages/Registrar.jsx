import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Registrar() {
    const [erro, setErro] = useState("");  //letra e da atividade 9
    return (
        <h1>Registrar</h1>
    );
}

export default Registrar;