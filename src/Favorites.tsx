import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Character from "./Components/Character";
import type { RootState } from "./store";

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <div>
      <Link to="/">Home</Link>
      {favorites?.map((character: Character) => (
        <ul key={character.id}>
          <li>
            <Character character={character} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Favorites;
