import { useForm } from "react-hook-form";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function Formulario(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: props.valores });
<<<<<<< HEAD

=======
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6
  return (
    <form onSubmit={handleSubmit(props.onEnviar)}>
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />
      <Botao texto={props.texto} />
    </form>
  );
}

<<<<<<< HEAD
export default Formulario;
=======
export default Formulario;
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6
