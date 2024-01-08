import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { FiPlus } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");

      setTags(response.data);
    }

    fetchTags();
  }, []);
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>

        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText title={tag.name} />
            </li>
          ))}
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiPlus} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "React Modal",
              tags: [{ id: "1", name: "react" }],
            }}
          />

          <Note
            data={{
              title: "Exemplo de Middleware",
              tags: [
                { id: "1", name: "express" },
                { id: "2", name: "nodejs" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota.
      </NewNote>
    </Container>
  );
}
