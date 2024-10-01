function InputEmail(props) {
  const regras = {
    required: { value: true, message: "Email é obrigatorio" },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato de email invalido",
    },
  };
  return (
    <>
      <label htmlFor="email"></label>
      <input type="email" {...props.register("email")} />
      {props.error && <p>{error.message}</p>}
    </>
  );
}

export default InputEmail;
