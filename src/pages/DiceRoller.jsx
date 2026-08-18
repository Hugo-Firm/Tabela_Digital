import { useState } from 'react';
import { Link } from 'react-router';
import './DiceRoller.css';

const DICE = [
  { sides: 4, label: 'd4', shape: 'triangle' },
  { sides: 6, label: 'd6', shape: 'square' },
  { sides: 8, label: 'd8', shape: 'diamond' },
  { sides: 10, label: 'd10', shape: 'pentagon' },
  { sides: 12, label: 'd12', shape: 'hexagon' },
  { sides: 20, label: 'd20', shape: 'icosahedron' },
  { sides: 100, label: 'd100', shape: 'percentile' },
];

function DiceIcon({ shape }) {
  switch (shape) {
    case 'triangle':
      return (
        <svg viewBox="0 0 100 100" className="dice-icon">
          <polygon points="50,8 92,85 8,85" />
          <line x1="50" y1="8" x2="50" y2="85" />
          <line x1="50" y1="8" x2="8" y2="85" />
          <line x1="50" y1="8" x2="92" y2="85" />
        </svg>
      );
    case 'square':
      return (
        <svg viewBox="0 0 100 100" className="dice-icon">
          <rect x="14" y="14" width="72" height="72" />
          <line x1="14" y1="14" x2="86" y2="86" />
          <line x1="86" y1="14" x2="14" y2="86" />
        </svg>
      );
    case 'diamond':
      return (
        <svg viewBox="0 0 100 100" className="dice-icon">
          <polygon points="50,6 94,50 50,94 6,50" />
          <line x1="50" y1="6" x2="50" y2="94" />
          <line x1="6" y1="50" x2="94" y2="50" />
        </svg>
      );
    case 'pentagon':
      return (
        <svg viewBox="0 0 100 100" className="dice-icon">
          <polygon points="50,6 94,38 77,90 23,90 6,38" />
          <line x1="50" y1="6" x2="50" y2="60" />
          <line x1="6" y1="38" x2="50" y2="60" />
          <line x1="94" y1="38" x2="50" y2="60" />
        </svg>
      );
    case 'hexagon':
      return (
        <svg viewBox="0 0 100 100" className="dice-icon">
          <polygon points="50,4 90,27 90,73 50,96 10,73 10,27" />
          <line x1="50" y1="4" x2="50" y2="96" />
          <line x1="10" y1="27" x2="90" y2="73" />
          <line x1="90" y1="27" x2="10" y2="73" />
        </svg>
      );
    case 'icosahedron':
      return (
        <svg viewBox="0 0 100 100" className="dice-icon">
          <polygon points="50,4 90,30 78,90 22,90 10,30" />
          <line x1="50" y1="4" x2="50" y2="50" />
          <line x1="90" y1="30" x2="50" y2="50" />
          <line x1="78" y1="90" x2="50" y2="50" />
          <line x1="22" y1="90" x2="50" y2="50" />
          <line x1="10" y1="30" x2="50" y2="50" />
        </svg>
      );
    case 'percentile':
      return (
        <svg viewBox="0 0 100 100" className="dice-icon">
          <circle cx="50" cy="50" r="44" />
          <circle cx="50" cy="50" r="27" />
          <line x1="50" y1="6" x2="50" y2="23" />
          <line x1="50" y1="77" x2="50" y2="94" />
          <line x1="6" y1="50" x2="23" y2="50" />
          <line x1="77" y1="50" x2="94" y2="50" />
        </svg>
      );
    default:
      return null;
  }
}

export function DiceRoller() {
  const [rolling, setRolling] = useState(null);
  const [result, setResult] = useState(null);

  function rollDie(sides) {
    if (rolling) return;
    setRolling(sides);

    setTimeout(() => {
      const value = Math.floor(Math.random() * sides) + 1;
      setResult({ sides, value });
      setRolling(null);
    }, 650);
  }

  function closePopup() {
    setResult(null);
  }

  return (
    <div className="dice-page">
      <h1 className="dice-page__title">Simulador de Dados</h1>

      <div className="dice-page__divider">
        <span className="dice-page__divider-line"></span>
        <span className="dice-page__divider-gem"></span>
        <span className="dice-page__divider-line"></span>
      </div>

      <p className="dice-page__subtitle">Escolha o dado e desafie a sorte</p>

      <div className="dice-grid">
        {DICE.map((die) => (
          <button
            key={die.sides}
            className={`dice-card ${rolling === die.sides ? 'dice-card--rolling' : ''}`}
            onClick={() => rollDie(die.sides)}
            disabled={rolling !== null}
          >
            <DiceIcon shape={die.shape} />
            <span className="dice-card__label">{die.label}</span>
          </button>
        ))}
      </div>

      {result && (
        <div className="dice-modal-overlay" onClick={closePopup}>
          <div className="dice-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dice-modal__seal">
              <span className="dice-modal__seal-number">{result.value}</span>
              <span className="dice-modal__seal-label">d{result.sides}</span>
            </div>

            <h2 className="dice-modal__title">Resultado</h2>

            <div className="dice-modal__divider">
              <span className="dice-modal__divider-line"></span>
              <span className="dice-modal__divider-gem"></span>
              <span className="dice-modal__divider-line"></span>
            </div>

            <p className="dice-modal__text">
              Você rolou um <strong>d{result.sides}</strong> e obteve
            </p>
            <p className="dice-modal__value">{result.value}</p>

            <button className="dice-modal__close" onClick={closePopup}>
              Fechar
            </button>
          </div>
        </div>
      )}

      <Link to="/" className="home__link">
        Voltar para Home
      </Link>
    </div>
  );
}

export default DiceRoller;