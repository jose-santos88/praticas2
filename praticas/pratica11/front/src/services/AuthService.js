import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function autenticar(usuario) {
  return axios
    .post(`${url}/login`, { email: usuario.email, password: usuario.senha })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
      }
    });
}

function registrar(usuario) {
  return axios
    .post(`${url}/register`, { email: usuario.email, password: usuario.senha })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
      }
    });
}

function atualizar() {
  return axios
    .put(`${url}/user/${usuario.id}`, {
      email: usuario.email,
      password: usuario.senha,
    })
    .then((response) => {
      return { sucesso: true, daos: response.data };
    })

    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mesnagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
      }
    });
}

export { autenticar, registrar, atualizar };
