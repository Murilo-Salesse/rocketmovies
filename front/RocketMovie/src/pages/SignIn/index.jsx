import { useState } from 'react';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signOut } = useAuth();

  function handleSignIn() {
    return signIn({ email, password });
  }
  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <div className="redirect">
          <Link to="/register">Criar conta</Link>
        </div>
      </Form>

      <Background />
    </Container>
  );
}
