<<<<<<< HEAD
function INputTelefone(props) {
=======
function InputTelefone(props) {
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2
    const regras = {
        required: "Telefone é obrigatório"
    }

    return (
        <>
        <label htmlFor="telefone">Telefone</label>
        <input type="text" {...props.register("telefone", regras)} />
        {props.error && <p>{props.error.message}</p>}
        </>
    );
}

<<<<<<< HEAD
export default INputTelefone;
=======
export default InputTelefone;
>>>>>>> e5fec031cec0c676cf5114fdf6af2b51b278e0b2
