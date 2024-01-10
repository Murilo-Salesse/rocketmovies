import { useNavigate } from 'react-router-dom';
import { Container, Profile, Logout, Information } from './styles';
import { GiEntryDoor } from 'react-icons/gi';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../service/api';

export function Header({ children }) {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Profile>
        <h1>RocketMovies</h1>

        {children}

        <div className="infos-wrapper">
          <Information to="/profile">
            <div>
              <span>{user.name}</span>
              <img src={avatarUrl} alt={user.name} />
            </div>{' '}
          </Information>
        </div>
        <Logout>
          <span>
            <GiEntryDoor onClick={handleSignOut} />
          </span>
        </Logout>
      </Profile>
    </Container>
  );
}
