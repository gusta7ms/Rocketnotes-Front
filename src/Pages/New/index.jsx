import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
// import { Section } from "../../components/Section";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Titulo" type="text" />
        <TextArea placeholder="Observações"/>
        </Form>

        {/* <Section title="Links uteis"/> */}

      </main>
    </Container>
  );
}
