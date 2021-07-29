import { useState, useEffect, useMemo, useContext } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Switch, CssBaseline } from '@material-ui/core';
import PokemonSearch from "./components/PokemonSearch";
import PokemonTeam from "./components/PokemonTeam";
import PokemonCard from "./components/PokemonCard";

import { DarkModeContext } from "./context/darkModeContext";


function App() {
  const [result, setResult] = useState({});
  const [team, setTeam] = useState([]);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const darkModeContext = useContext(DarkModeContext);

  useEffect(() => {
    const cachedTeam = localStorage.getItem("team");
    if (cachedTeam) {
      setTeam(JSON.parse(cachedTeam));
    } else {
      localStorage.setItem("team", []);
    }
  }, []);


  const handleAddToTeam = (pokemon) => {
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
    <>
        <Switch checked={(prefersDarkMode === "dark" ?? "light")} onChange={darkModeContext.toggleDarkMode} />
        <PokemonTeam team={team} />
        <PokemonSearch setResult={setResult} />
        <PokemonCard result={result} handleAddToTeam={handleAddToTeam} />
    </>
  );
}

export default function DarkModeApp() {
  const [mode, setMode] = useState('light');

  const currentMode = useMemo(
    () => ({
      toggleDarkMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <DarkModeContext.Provider value={currentMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}

