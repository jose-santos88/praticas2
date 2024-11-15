function InputEmail(props) {
  const regras = {
    required: "Email é obrigatório",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato de email inválido",
    },
  };

  return (
    <>
<<<<<<< HEAD
      <label htmlFor="email">E-mail:</label>
=======
      <label htmlFor="email">E-mail</label>
>>>>>>> 7634e8f2dba6da2671135da60f91bd16e55b996c
      <input type="email" {...props.register("email", regras)} />
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

export default InputEmail;
