import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input placeholder="Nome do usuário" type="text" icon={FiUser} />

        <Input placeholder="Email" type="text" icon={FiMail} />

        <Input placeholder="Senha Atual" type="password" icon={FiLock} />

        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title="Salvar alterações" />
      </Form>
    </Container>
  );
}
