import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from "./styles";

import { api } from "../../services/api";
import avatarPlaceholderImg from "../../../assets/placeholderImg.jpg";

export function Header() {
  const { singOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholderImg;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={singOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
