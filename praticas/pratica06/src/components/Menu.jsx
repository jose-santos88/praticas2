import Link from "./Link";

function Menu(props) {
    const opcoes =[
        {rota:"/home", texto: "Home"},
        {rota:"/sobre", texto: "Sair"},
        {rota:"/login", texto: "Sair"}
    ];
    return (
        <nav>
            <ul>
                {opcoes.map((opcao, index) => (
                    <li key={index}>
                        <Link rota={opcao.rota} texto={opcao.texto} navegaPara={props.navegaPara} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;