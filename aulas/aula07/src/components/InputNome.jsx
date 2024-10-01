function InputNome(props) {
  const regra = {
    required: { value: true, message: "Nome é obrigatorio" },
    maxLength: {
      value: 100,
      message: "O nome deve ter no máximo 100 caracteres",
    },
  };
  return (
    <>
      <label htmlFor="nome">Nome</label>
      <input type="text" {...props.register("nome", regras)} />
      {props.error && <p>{error.message}</p>}
    </>
  );
}

export default InputNome;
