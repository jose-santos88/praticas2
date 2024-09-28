import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import Botao from "./Botao";

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();

    return (
        <form>
            <InputEmail valor={email} mudaValor={(e) => setEmail(e.target.value)} />
            <InputSenha valor={senha} mudaValor={(e) => setSenha(e.terget.value)} />
            <Botao texto="Entrar" aoClicar={(e) => navigate("/home")} />
        </form>
    );
}

export default FormLogin;