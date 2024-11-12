import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2
import { buscarTodos, remover } from "../services/ContatoService";
import Listagem from "./Listagem";

function Listar() {
<<<<<<< HEAD
  const [contatos, setContatos] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const trataAtualizar = (id) => {
    navigate(`/editar/${id}`);
    const carregar = async () => {};
  };

  const trataRemover = async (id) => {
    const resposta = await remover(id);
    if (resposta.sucesso) {
      carregar();
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return <></>;
}

export default Listar;
=======
    const [contatos, setContatos] = useState([]);
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const trataAtualizar = (id) => {
        navigate(`/editar/${id}`);
    }

    const trataRemover = async (id) => {
        const resposta = await remover(id);
        if (resposta.sucesso) {
            carregar();
            setErro("");
        } else {
            setErro(resposta.mensagem)
        }
    }

    const carregar = async () => {
        const resposta = await buscarTodos();
        if (resposta.sucesso) {
            setContatos(resposta.dados);
        } else {
            setErro(resposta.mensagem);
        }
    }

    useEffect(() => { carregar() }, [])

    return (
        <>
            <Cabecalho />
            <Conteudo>
                <h2>Listar Contatos</h2>
                <Listagem itens={contatos}
                    trataAtualizar={trataAtualizar}
                    trataRemover={trataRemover} />
                    {erro && <p>{erro}</p>}
            </Conteudo>
        </>
    );
}

export default Listar;
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2
