import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "uno.css";
import "./App.css";
import Character from "./Components/Character";
import { addFavorite } from "./stores/favorites";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get<Character[]>(
        "https://api.sampleapis.com/futurama/characters"
      );

      setCharacters(response.data);
    };
    getCharacters();
  }, []);

  return (
    <div className="App">
      <Link to="/favorites">Favorites</Link>

      {characters?.map((character: Character) => (
        <ul key={character.id}>
          <li onClick={() => dispatch(addFavorite(character))}>
            <Character character={character} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
