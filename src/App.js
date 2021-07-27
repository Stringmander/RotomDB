import { useState, useEffect } from "react";
import PokemonSearch from "./components/PokemonSearch";
import PokemonTeam from "./components/PokemonTeam";
import PokemonCard from "./components/Result/PokemonCard";

function App() {
  const [result, setResult] = useState({});
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const cachedTeam = localStorage.getItem("team");
    if (cachedTeam) {
      setTeam(JSON.parse(cachedTeam));
    } else {
      localStorage.setItem("team", []);
    }
  }, []);

  const handleAddToTeam = (pokemon) => {
    // console.log(team)

    if (!team) {
      setTeam([pokemon]);
    } else {
      if (team.filter((member) => member.name === pokemon.name).length === 0) {
        setTeam([...team, pokemon]);
        localStorage.setItem("team", JSON.stringify([...team, pokemon]));
      } else {
        alert("Already in team");
      }
    }
  };

  return (
    <div className="App">
      <PokemonTeam team={team} />
      <PokemonSearch setResult={setResult} />
      <PokemonCard result={result} handleAddToTeam={handleAddToTeam} />
    </div>
  );
}

export default App;
