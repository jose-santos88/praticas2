function InputEmail(props) {
<<<<<<< HEAD
  const regras = {
    required: "E-mail é obrigatório",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato de e-mail inválido",
    },
  };
  return (
    <>
      <Label htmlFor="email">E-mail</Label>
      <input type="email" {...props.register("email", regras)} />
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

export default InputEmail;
=======
    const regras = {
        required: "E-mail é obrigatório",
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Formato de e-mail inválido",
        }
    }

    return (
        <>
        <label htmlFor="email">E-mail</label>
        <input type="email" {...props.register("email", regras)} />
        {props.error && <p>{props.error.message}</p>}
        </>
    );
}

export default InputEmail;
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6
