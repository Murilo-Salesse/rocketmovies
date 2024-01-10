import { useState } from 'react';
import { Container, Form, Inputs, Footer } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { api } from '../../service/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function New() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddNewTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveNewTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o nome do filme.');
    }

    if (!rating) {
      return alert('Digite a nota do filme.');
    }
    if (rating < 0 || rating > 5) {
      alert('A nota do filme so pode ser entre 0 e 5');
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar, clique para adicionar ou deixe o campo vazio.'
      );
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags,
    });

    alert('Filme registrado com sucesso.');
    navigate(-1);
  }

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquise pelo filme"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <main>
        <Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <header>
            <h1>Novo filme</h1>

            <div>
              <Button title="Salvar alterações" onClick={handleNewNote} />
            </div>
          </header>

          <Inputs>
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota de (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </Inputs>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Footer>
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveNewTag(tag)}
                />
              ))}

              <NoteItem
                $isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddNewTag}
              />
            </div>
          </Footer>
        </Form>
      </main>
    </Container>
  );
}
