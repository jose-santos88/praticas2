import InputPesquisar from "./InputPesquisar";
import Logo from "./Logo";
import Titulo from "./Titulo";

function Cabecalho() {
  return (
    <header>
      <Logo
        imagem="https://www.svgrepo.com/show/520490/student.svg"
        texto="Logo da Aplicação"
      />
      <Titulo texto="Aluno Online" />
      <InputPesquisar />
      <Logo
        imagem="https://www.svgrepo.com/show/440165/search.svg"
        texto="Icone de Pesquisar"
      />
    </header>
  );
}

export default Cabecalho;
