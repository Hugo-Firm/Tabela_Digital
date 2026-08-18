import { Link } from 'react-router';
import CharacterGrid from '../components/CharacterCard';
import Cabeca from '../components/cabeça.jsx';
import './tabela.css';

export function Tabela() {
  return (
    <>
    <div>
      <Cabeca />
      <CharacterGrid />
    </div>

    <Link to="/" className="home__link">
      Ir para Home
    </Link>
  </>
  );
}

export default Tabela;