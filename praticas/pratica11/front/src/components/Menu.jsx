import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
<<<<<<< HEAD
import { AuthContext } from "./AuthContext";
=======
import { AuthContext } from "../contexts/AuthContext";
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6

function Menu() {
  const navigate = useNavigate();
  const { usuario, logout } = useContext(AuthContext);
  const onSair = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav>
<<<<<<< HEAD
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuario.id}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink onClick={onSair}>Sair</NavLink>
        </li>
      </ul>
=======
        <ul>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to={`/perfil/${usuario.id}`}>Perfil</NavLink>
            </li>
            <li>
                <NavLink onClick={onSair}>Sair</NavLink>
            </li>
        </ul>
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6
    </nav>
  );
}

export default Menu;
