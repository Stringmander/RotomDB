import { useState, useEffect, useMemo, useContext } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Switch, CssBaseline } from "@material-ui/core";
import PokemonSearch from "./components/PokemonSearch";
import PokeDetails from "./components/PokeDetails";
import PokemonTeam from "./components/PokemonTeam";
import PokemonBG from "./components/PokeBG";

import { AppWrapper } from "./app.styles";
import { DarkModeContext, VersionGroupContext, VersionGroupProvider } from "./context";
import { queryApi } from "./util";

function App() {
  const [result, setResult] = useState({});
  const [team, setTeam] = useState([]);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const darkModeContext = useContext(DarkModeContext);
  const [shift, setShift] = useState(true);
  const [ speciesData, setSpeciesData ] = useState({});

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

  const handleSetResult = (res) => {
    setResult(res);
    setShift(!shift);
  };

  useEffect(() => {
    const test = async() => {
      const speciesEndpoint = result.species ? result.species.url : "";
      const speciesRes = await queryApi(speciesEndpoint);
      setSpeciesData(speciesRes);
    }

    test()
  },[result]);

  return (
    <AppWrapper className="AppWrapper">
      <Switch
        checked={prefersDarkMode === "dark" ?? "light"}
        onChange={darkModeContext.toggleDarkMode}
      />
      <PokemonBG shift={shift} types={result.types} />
      <PokemonTeam team={team} setResult={handleSetResult} />
      <PokemonSearch setResult={handleSetResult} />
      <PokeDetails result={result} speciesData={speciesData} addToTeam={handleAddToTeam} />
    </AppWrapper>
  );
}

export default function DarkModeApp() {
  const [mode, setMode] = useState("light");

  const currentMode = useMemo(
    () => ({
      toggleDarkMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <DarkModeContext.Provider value={currentMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <VersionGroupProvider>
          <App />
        </VersionGroupProvider>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}
