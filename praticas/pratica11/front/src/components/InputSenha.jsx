function InputSenha(props) {
<<<<<<< HEAD
    const regras = {
        required: "Senha é obrigatória",
        minLength: {
            value: 6,
            message: "A senha deve ter pelo menos 6 caracteres"
        }
    }

    return (
        <>
        <label htmlFor="senha">Senha</label>
        <input type="password" {...props.register("senha", regras)} />
        {props.error && <p>{props.error.message}</p>}
        </>
    );
=======
  const regras = {
    required: "Senha é obrigátoria",
    minLength: {
      value: 6,
      message: "A senha deve ter pelo menos 6 caracteres",
    },
  };

  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input type="password" {...props.register("senha", regras)} />
      {props.error && <p>{props.error.message}</p>}
    </>
  );
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6
}

export default InputSenha;