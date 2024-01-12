import { api } from "../../services/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

export function New() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevStats) => [...prevStats, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(linkDeleted) {
    setLinks((prevStats) => prevStats.filter((link) => link !== linkDeleted));
  }

  function handleAddTag() {
    setTags((prevStats) => [...prevStats, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(TagDeletes) {
    setTags((prevState) => prevState.filter((tag) => tag !== TagDeletes));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Por favor adicionar um titulo.");
    }

    if (newLink) {
      return alert(
        "Você deixou uma Link para adicionar, mas não clicou em adicionar. Por favor clique para adicionar ou deixe o campo vazio."
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma Tag para adicionar, mas não clicou em adicionar. Por favor clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags,
    });

    alert("Nota criada com sucesso!");

    handleBack();
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder="Titulo"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links uteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              $isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                $isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
