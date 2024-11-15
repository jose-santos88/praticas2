import axios from "axios";

const url = import.meta.env.VITE_API_URL

function buscarTodos() {
    return axios.get(url)
<<<<<<< HEAD
        .then((response) => { return { sucesso: true, dados: response.data } })

        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!" } });

}

function buscarUm() {
    return axios.get(`url/${id}`)
        .then((response) => { return { sucesso: true, dados: response.data } })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!" } })
=======
        .then((response) => {return { sucesso: true, dados: response.data };})
        .catch((error) => {return { sucesso: false, mensagem: "Ocorreu um erro!" };});
}

function buscarUm(id) {
    return axios.get(`${url}/${id}`)
    .then((response) => {return { sucesso: true, dados: response.data};})
    .catch((error) => {return { sucesso: false, mensagem: "Ocorreu um erro!"};});
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2
}

function adicionar(contato) {
    return axios.post(url, contato)
<<<<<<< HEAD
        .then((response) => { return { sucesso: true, dados: response.data }; })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!" }; });
}

function atualizar(contato) {
    return axios.put(`url/${contato.id}`, { contato.nome, contato.telefone })
        .then((response) => { return { sucesso: true, dados: response.data }; })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!" }; });
}

function remover(id) {
    return axios.delete(`url/${id}`)
        .then((response) => { return { sucesso: true, dados: response.data }; })
        .catch((response) => { return { sucesso: false, mensagem: "Ocorreu um erro!" }; });
}
=======
    .then((response) => {return { sucesso: true, dados: response.data};})
    .catch((error) => {return { sucesso: false, mensagem: "Ocorreu um erro!"};});
}

function atualizar(contato) {
    return axios.put(`${url}/${contato.id}`, {nome: contato.nome, telefone: contato.telefone})
    .then((response) => {return { sucesso: true, dados: response.data };})
    .catch((error) => {return { sucesso: false, mensagem: "Ocorreu um erro!" };});
}

function remover(id) {
    return axios.delete(`${url}/${id}`)
    .then((response) => {return { sucesso: true, dados: response.data };})
    .catch((error) => {return { sucesso: false, mensagem: "Ocorreu um erro!" };})
};
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2

export { buscarTodos, buscarUm, adicionar, atualizar, remover };