import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Background} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SingIn() {
  return (
    <Container>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar sues links uteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder="email" type="text" icon={FiMail} />

        <Input placeholder="password" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="#">Criar Conta</a>
      </Form>

      <Background/>
    </Container>
  )
}
