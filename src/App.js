import { useState } from "react";
import PokemonSearch from "./components/PokemonSearch";
import PokemonDetail from "./components/Result/PokemonDetail";

function App() {
  const [result, setResult] = useState({});

  return (
    <div className="App">
      <PokemonSearch setResult={setResult} />
      <PokemonDetail result={result} />
    </div>
  );
}

export default App;
