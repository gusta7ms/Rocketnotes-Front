import { api } from "../../services/api";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, Links, Content } from "./styles";

import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Tag } from "../../Components/Tag";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteNote() {
    const confirm = window.confirm(`
      Deseja realmente remover a nota?
      A nota será excluindo PERMANENTEMENTE!!`);

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText
              title="Excluir Nota"
              onClick={handleDeleteNote}
            ></ButtonText>

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
