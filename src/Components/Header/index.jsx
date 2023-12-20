import { RiShutDownLine } from "react-icons/ri";
import { Conteiner, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Conteiner>
      <Profile>
        <img src="https://github.com/gusta7ms.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Gustavo Melo</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Conteiner>
  );
}
