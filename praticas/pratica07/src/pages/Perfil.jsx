import { useParams } from "react-router-dom";
import Secao from "./Secao";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import Botao from "./Botao";

function Perfil() {
    const { id } = useParams();

    return (
        <>
        {id == 1 ?
        <Secao texto="Perfil do Usúario">
            <InputEmail valor="aluno@email.com" mudaValor={() =>{}} />
            <InputSenha valor="" mudaValor={() =>{}} />
            <Botao texto="Salvar" />
        </Secao>
        : <p>Usúario não encontrado</p> }
        </>
    );
}

export default Perfil;