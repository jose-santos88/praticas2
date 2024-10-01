import { useForm } from "react-hook-form";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";
import InputNome from "../components/InputNome";

function FormPerfil() {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => {})}>
      <InputNome register={register} error={errors.nome} />
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />
      <Botao texto="Salvar" />
    </form>
  );
}

export default FormPerfil;
