import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { singIn } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate("/register");
  }

  function handleSingIn() {
    singIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar sues links uteis</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSingIn} />

        <ButtonText title="Criar Conta" onClick={handleBack}></ButtonText>
      </Form>

      <Background />
    </Container>
  );
}
