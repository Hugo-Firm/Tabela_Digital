import React from "react";
import "./CharacterCard.css";

const CLASS_ACCENTS = {
  Bárbaro: "#8b2e2e",
  Bardo: "#a8447a",
  Bruxo: "#4a2e6b",
  Clérigo: "#c9a961",
  Druida: "#5a7a3d",
  Feiticeiro: "#7a2e6b",
  Guerreiro: "#6b4423",
  Ladino: "#3d5a4a",
  Mago: "#4a3b7a",
  Monge: "#3d6b6b",
  Paladino: "#d4af37",
  Patrulheiro: "#3d6b4a",
};

const DEFAULT_ACCENT = "#c9a961";

function getAccent(className) {
  return CLASS_ACCENTS[className] || DEFAULT_ACCENT;
}

function CharacterCard({ name, race, characterClass, level }) {
  const accent = getAccent(characterClass);

  return (
    <div
      className="character-card"
      style={{ "--accent": accent }}
    >
      <div className="character-card__seal" aria-label={`Nível ${level}`}>
        <span className="character-card__seal-number">{level}</span>
        <span className="character-card__seal-label">nível</span>
      </div>

      <div className="character-card__body">
        <h3 className="character-card__name">{name}</h3>

        <div className="character-card__divider" aria-hidden="true">
          <span className="character-card__divider-line" />
          <span className="character-card__divider-gem" />
          <span className="character-card__divider-line" />
        </div>

        <div className="character-card__meta">
          <span className="character-card__race">{race}</span>
          <span className="character-card__meta-sep">•</span>
          <span className="character-card__class">{characterClass}</span>
        </div>
      </div>
    </div>
  );
}

const SAMPLE_CHARACTERS = [
  { name: "Elyndra Nightsong", race: "Elfa", characterClass: "Mago", level: 7 },
  { name: "Grommash Punho-de-Ferro", race: "Meio-orc", characterClass: "Bárbaro", level: 12 },
  { name: "Tamsin Corvo", race: "Humana", characterClass: "Ladino", level: 5 },
  { name: "Brother Aldric", race: "Anão da colina", characterClass: "Clérigo", level: 9 },
  { name: "Fennick Sussurrante", race: "Halfling", characterClass: "Bardo", level: 3 },
  { name: "Seraphine Alvorada", race: "Tiefling", characterClass: "Paladino", level: 15 },
];

export default function CharacterGrid({ characters = SAMPLE_CHARACTERS }) {
  return (
    <div className="character-grid">
      {characters.map((char, index) => (
        <CharacterCard
          key={`${char.name}-${index}`}
          name={char.name}
          race={char.race}
          characterClass={char.characterClass}
          level={char.level}
        />
      ))}
    </div>
  );
}

export { CharacterCard };