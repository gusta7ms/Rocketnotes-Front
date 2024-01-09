import { api } from "../../services/api";

import { Container, Profile, Logout } from "./styles";

import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";

import { useAuth } from "../../hooks/auth";

import avatarPlaceholderImg from "../../../assets/placeholderImg.jpg";

export function Header() {
  const { singOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSingOut() {
    navigate("/");
    singOut();
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholderImg;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSingOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
