import { Link } from 'react-router';
import CharacterGrid from '../components/CharacterCard';
import Cabeca from '../components/cabeça.jsx';
import './tabela.css';

export function Tabela() {
  return (
    <>
    <Link to="/" className="home__link">
      Ir para Home
    </Link>
    <div>
      <Cabeca />
      <CharacterGrid />
    </div>

  </>
  );
}

export default Tabela;