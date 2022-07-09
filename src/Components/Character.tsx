interface CharacterProps {
    character: Character;
}

const Character: React.FC<CharacterProps> = ({ character }): JSX.Element => (
  <div className="border-3">
    <span>
      <strong>Name :</strong>
    </span>
    <p>
      {character.name.first} {character.name.last}
    </p>
    <span>
      <strong>Species :</strong>
    </span>
    <p>{character.species}</p>
    <span>
      <strong>Gender :</strong>
    </span>
    <p>{character.gender}</p>
    <img
      src={character.images.main}
      alt={`${character.name.first} image`}
    ></img>
  </div>
);

export default Character;
