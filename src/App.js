import { useEffect, useState } from "react";

function App() {
  const DATABASE_URL = "http://localhost:3001/pokemon";

  const [pokemonName, setPokemonName] = useState();

  useEffect(() => {
    return () => {
      //  Fetch a list of 5 letters pokemon ( 49 pokemon in the house)
      fetch(DATABASE_URL)
        .then((res) => res.json())
        .then((json) => {
          const randomNumber = Math.random() * json.length;
          const normalizeRandomNumber = Math.floor(randomNumber);
          const randomPokemonName = json[normalizeRandomNumber];
          setPokemonName(randomPokemonName.name);
        });
    };
  }, [setPokemonName]);

  return (
    <div className="App">
      <h1>Wordlemon (Wordle clone)</h1>
    </div>
  );
}

export default App;
