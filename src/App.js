import { useState, useEffect, useMemo } from "react";
// import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Switch, CssBaseline } from '@material-ui/core';
import PokemonSearch from "./components/PokemonSearch";
import PokemonTeam from "./components/PokemonTeam";
import PokemonCard from "./components/PokemonCard";
import { FormatAlignLeftSharp } from "@material-ui/icons";
import { PokemonDetails } from "./components/PokemonCard";


function App() {
  const [result, setResult] = useState({});
  const [team, setTeam] = useState([]);
  const [prefersDarkmode, setPrefersDarkMode] = useState((useMediaQuery("(prefers-color-scheme: dark)")) ? "dark" : "light")

  const DARK_MODE_MAP = {
    default: "light",
    light: "light",
    dark: "dark"
  }[prefersDarkmode]

  const theme = createTheme({
    palette: {
      mode: DARK_MODE_MAP
    },
  });

  const handleDarkSwitch = () => {
    (prefersDarkmode === "dark") ? setPrefersDarkMode("light") : setPrefersDarkMode("dark")
  }

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Switch checked={(prefersDarkmode === "dark")} onChange={handleDarkSwitch} />
        <PokemonTeam team={team} />
        <PokemonSearch setResult={setResult} />
        <PokemonCard result={result} handleAddToTeam={handleAddToTeam} />
      </div>
    </ThemeProvider>
  );
}

export default App;
