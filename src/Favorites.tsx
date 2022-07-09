import { useContext } from "react";
import { Link } from "react-router-dom";
import Character from "./Components/Character";
import { FavoritesContext } from "./RouterApp";

const Favorites: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

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
