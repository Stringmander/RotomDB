import { useState } from "react";
import PokemonSearch from "./components/PokemonSearch";
import PokemonDetail from "./components/Result/PokemonDetail";
import RecipeReviewCard from "./components/Result/PokemonCard";

function App() {
  const [result, setResult] = useState({});

  return (
    <div className="App">
      <PokemonSearch setResult={setResult} />
      {/* <PokemonDetail result={result} /> */}
      <RecipeReviewCard result={result} />
    </div>
  );
}

export default App;
