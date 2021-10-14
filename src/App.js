import {
  useState,
  // useEffect,
  // useMemo,
  // useContext,
} from "react";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  Container,
  // Switch,
  CssBaseline,
} from "@material-ui/core";
import PokemonSearch from "./components/PokemonSearch";
import PokeDetails from "./components/PokeDetails";
// import PokemonTeam from "./components/PokemonTeam";
// import PokemonBG from "./components/PokeBG";

import { AppWrapper } from "./app.styles";
import {
  // DarkModeContext,
  LanguageContextProvider,
  VersionGroupProvider,
} from "./context";
import { useFetch } from "./util";

function App() {
  // const [team, setTeam] = useState([]);
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const darkModeContext = useContext(DarkModeContext);
  // const [shift, setShift] = useState(true);

  const [url, setUrl] = useState("");
  const { isLoading, serverError, apiData } = useFetch(url);

  // useEffect(() => {
  //   const cachedTeam = localStorage.getItem("team");
  //   if (cachedTeam) {
  //     setTeam(JSON.parse(cachedTeam));
  //   } else {
  //     localStorage.setItem("team", []);
  //   }
  // }, []);

  // const handleAddToTeam = (pokemon) => {
  //   if (!team) {
  //     setTeam([pokemon]);
  //   } else {
  //     if (team.filter((member) => member.name === pokemon.name).length === 0) {
  //       setTeam([...team, pokemon]);
  //       localStorage.setItem("team", JSON.stringify([...team, pokemon]));
  //     } else {
  //       alert("Already in team");
  //     }
  //   }
  // };

  // const handleSetResult = (res) => {
  //   setShift(!shift);
  // };

  return (
    <AppWrapper className="AppWrapper">
      {/* <Switch
        checked={prefersDarkMode === "dark" ?? "light"}
        onChange={darkModeContext.toggleDarkMode}
      /> */}
      {/* <PokemonBG shift={shift} types={result.types} /> */}
      {/* <PokemonTeam team={team} setResult={handleSetResult} /> */}
      <Container>
        <PokemonSearch setUrl={setUrl} />
        {isLoading && <span>Loading...</span>}
        {!isLoading && serverError ? (
          <span>Error in fetching data</span>
        ) : apiData !== null ? (
          <PokeDetails result={apiData} />
        ) : (
          <></>
        )}
      </Container>
    </AppWrapper>
  );
}

export default function DarkModeApp() {
  // const [mode, setMode] = useState("light");

  // const currentMode = useMemo(
  //   () => ({
  //     toggleDarkMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  return (
    // <DarkModeContext.Provider value={currentMode}>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
    //     <LanguageContextProvider>
    //       <VersionGroupProvider>
    //         <App />
    //       </VersionGroupProvider>
    //     </LanguageContextProvider>
    //   </ThemeProvider>
    // </DarkModeContext.Provider>

    <>
      <CssBaseline />
      <LanguageContextProvider>
        <VersionGroupProvider>
          <App />
        </VersionGroupProvider>
      </LanguageContextProvider>
    </>
  );
}
