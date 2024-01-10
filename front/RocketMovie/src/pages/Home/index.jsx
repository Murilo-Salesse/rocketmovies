import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../service/api';

import { Container, Input } from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Button } from '../../components/Button';

export function Home() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquise pelo filme"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <main>
        <div className="header-cards">
          <h1>Meus Filmes</h1>
          <Button title="Adicionar Filme" to="/new" />
        </div>

        {notes.map((note) => (
          <Note
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
          />
        ))}
      </main>
    </Container>
  );
}
