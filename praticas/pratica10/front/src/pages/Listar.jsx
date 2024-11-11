import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodos, remover } from "../services/ContatoService";
import Listagem from "./Listagem";

function Listar() {
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
