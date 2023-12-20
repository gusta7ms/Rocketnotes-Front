// TODO PAGES DETAILS
// ! PAGES DETAILS
// ? PAGES DETAILS

import { Container, Links } from "./styles";

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

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
    </Container>
  );
}
