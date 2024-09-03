import BotaoEntrar from "../components/BotaoEntrar";
import InputEmail from "../components/InputEmail";
import Rodape from "../components/Rodape";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import InputSenha from "../components/InputSenha";

function Login() {
    return (
        <>
        <main>
            <Logo />
            <Titulo />
            <InputEmail />
            <InputSenha />
            <BotaoEntrar />
            <Link />
        </main>
        <Rodape />
        </>
    );
}

export default Login;