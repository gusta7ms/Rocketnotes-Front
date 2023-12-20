// TODO PAGES DETAILS
// ! PAGES DETAILS
// ? PAGES DETAILS

import { Container, Links, Content } from "./styles";

import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Tag } from "../../Components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota"></ButtonText>

          <h1>Introdução ao React</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularized in the 1960s
            with the release of Letraste sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Ladus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
