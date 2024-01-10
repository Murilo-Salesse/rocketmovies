import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment-timezone';

import { api } from '../../service/api';

import { Container, Infos, Content, Delete, Input } from './styles';
import { IoIosReturnLeft } from 'react-icons/io';
import { FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const momentDate = data
    ? moment
        .utc(data.updated_at)
        .tz('America/Sao_Paulo')
        .format('DD/MM/YYYY HH:mm:ss')
    : null;

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja mesmo deletar o filme?');

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchMovie();
  }, []);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquise pelo filme"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      {data && (
        <main>
          <Content>
            <ButtonText
              icon={IoIosReturnLeft}
              title="Voltar"
              onClick={handleBack}
            />
            <Infos>
              <h1>{data.title}</h1>
              {data.rating && <Rating grade={data.rating} />}
            </Infos>

            <div className="info-time">
              <img
                src="https://github.com/Murilo-Salesse.png"
                alt="foto do usuario"
              />

              <span>Por {data.name}</span>
              <FiClock />
              <span>{momentDate}</span>
            </div>

            {data.tags && (
              <div>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}

            <p>{data.description}</p>
            <Delete onClick={handleRemove}>Excluir Filme</Delete>
          </Content>
        </main>
      )}
    </Container>
  );
}

export default Details;
