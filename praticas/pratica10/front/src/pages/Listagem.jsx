function Listagem(props) {
<<<<<<< HEAD
  return (
    <ul>
      <li>
        <span>Nome</span>
        <span>Telefone</span>
        <span>Ações</span>
      </li>
      {props.itens.map((contato, key) => (
        <li key={key}>
            <span>{contato.nome}</span>
            <span>{contato.telefone}</span>
            <span>
                <button onClick={(e) =>
                    props.trataAtualizar(contato.id)}>Atualizar</button>
                <button onClick={(e) => props.trataRemover(contato.id)}>Remover</button>
            </span>
        </li>
      ))}
    </ul>
  );
}

export default Listagem;
=======
    return (
        <ul>
            <li>
                <span>Nome</span>
                <span>Telefone</span>
                <span>Ações</span>
            </li>
            {props.itens.map((contato, index) => (
                <li key={index}>
                    <span>{contato.nome}</span>
                    <span>{contato.telefone}</span>
                    <span>
                        <button onClick={(e) =>
                            props.trataAtualizar(contato.id)}>Atualizar</button>
                            <button onClick={ (e) => 
                            props.trataRemover(contato.id)}>Remover</button>
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Listagem;
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2
