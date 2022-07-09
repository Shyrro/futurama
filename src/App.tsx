import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "uno.css";
import "./App.css";
import Character from "./Components/Character";
import { FavoritesContext } from "./RouterApp";

function App() {
  const { addFavorite } = useContext(FavoritesContext);
  const [characters, setCharacters] = useState<Character[]>([]);

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
          <li onClick={() => addFavorite(character)}>
            <Character character={character} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
