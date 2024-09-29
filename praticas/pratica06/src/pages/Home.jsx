import Conteudo from "../components/Conteudo";
import Titulo from "../components/Titulo";
import Menu from "../components/Menu";

function Home(props) {
    return (
        <Conteudo>
            <Titulo texto="Página Inicial" />
            <Menu navegaPara={props.navegaPara} />
        </Conteudo>
    );
}

export default Home;