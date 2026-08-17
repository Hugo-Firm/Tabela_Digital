import { Link } from 'react-router';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="home__seal">
        <span className="home__seal-icon">⚔</span>
      </div>

      <h1 className="home__title">Página Inicial</h1>

      <div className="home__divider">
        <span className="home__divider-line"></span>
        <span className="home__divider-gem"></span>
        <span className="home__divider-line"></span>
      </div>

      <p className="home__subtitle">Bem-vindo às terras de aventura</p>

      <Link to="/tabela" className="home__link">
        Ir para Tabela
      </Link>
    </div>
  );
}

export { Home };