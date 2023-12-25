// TODO PAGES SingIN

import { FiUser, FiMail, FiLock} from "react-icons/fi";

import { Link } from "react-router-dom";

import { Container, Form, Background} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SingUp() {
  return (
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar sues links uteis</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Usuário" type="text" icon={FiUser} />

        <Input placeholder="email" type="text" icon={FiMail} />

        <Input placeholder="password" type="password" icon={FiLock} />

        <Button title="Cadastrar seu novo usuário" />

        <Link to="/">Voltar para login</Link>
      </Form>

    </Container>
  )
}
