import { Outlet } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";

function Layout() {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Menu />
        <Outlet />
      </Conteudo>
    </>
  );
}

export default Layout;
