import { useState } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { LanguageContextProvider, VersionGroupProvider } from "./context";
import { useFetch } from "./util";
import PokemonSearch from "./components/PokemonSearch";
import PokeDetails from "./components/PokeDetails";
// import PokemonTeam from "./components/PokemonTeam";
// import PokemonBG from "./components/PokeBG";
import theme from "./themes";
import { AppWrapper } from "./app.styles";

function App() {
  const [url, setUrl] = useState("");
  const { isLoading, serverError, apiData } = useFetch(url);

  // const [team, setTeam] = useState([]);
  // const [shift, setShift] = useState(true);

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
    <LanguageContextProvider>
      <VersionGroupProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppWrapper className="AppWrapper">
            {/* <PokemonBG shift={shift} types={result.types} /> */}
            {/* <PokemonTeam team={team} setResult={handleSetResult} /> */}
            <Container>
              <PokemonSearch setUrl={setUrl} />
              {isLoading && <span>Loading...</span>}
              {!isLoading && serverError ? (
                <span>Error in fetching data</span>
              ) : apiData !== null ? (
                <PokeDetails result={apiData} setUrl={setUrl} />
              ) : (
                <></>
              )}
            </Container>
          </AppWrapper>
        </ThemeProvider>
      </VersionGroupProvider>
    </LanguageContextProvider>
  );
}

export default App;
