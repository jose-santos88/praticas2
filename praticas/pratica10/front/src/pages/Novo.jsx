<<<<<<< HEAD
function Novo() {
    return (
        <>
        <h1></h1>
=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Conteudo from "../components/Conteudo";
import Cabecalho from "../components/Cabecalho";
import Formulario from "./Formulario";
import { adicionar } from "../services/ContatoService";

function Novo() {
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const trataEnviar = async (data) => {
        const resposta = await adicionar(data);
        if (resposta.sucesso) {
            navigate("/");
        } else {
            setErro(resposta.mensagem);
        }
    }

    return (
        <>
        <Cabecalho />
        <Conteudo>
            <h2>Novo Contato</h2>
            <Formulario trataEnviar={trataEnviar} valores={{}} />
            {erro && <p>{erro}</p>}
        </Conteudo>
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2
        </>
    );
}

export default Novo;