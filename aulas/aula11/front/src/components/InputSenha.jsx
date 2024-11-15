function InputSenha(props) {
  const regras = {
    required: "Senha é obrigatório",
<<<<<<< HEAD
    minLength: {
=======
    pattern: {
>>>>>>> 7634e8f2dba6da2671135da60f91bd16e55b996c
      value: 6,
      message: "Senha deve ter pelo menos 6 caracteres",
    },
  };

  return (
    <>
      <label htmlFor="senha">Senha:</label>
      <input type="password" {...props.register("senha", regras)} />
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

export default InputSenha;
