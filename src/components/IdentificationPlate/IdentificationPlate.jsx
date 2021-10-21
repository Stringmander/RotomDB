import {
  IconButton,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { capitalCase, formatPokeId, mapPokeTypeName } from "../../util";
import {
  Background,
  SpriteIdBg,
  SpriteAndIdContainer,
  Sprite,
  NameAndIconsContainer,
  PokemonTypeIcon,
  TypeIconsContainer,
  NameIconsAndButtonContainer,
} from "./IdentifactionPlate.styles";
import { theme } from ".";

const IdentifactionPlate = ({ id, name, types }) => {
  const defaultTheme = useTheme();
  const matches = useMediaQuery(defaultTheme.breakpoints.up("sm"));
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const animatedSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const displayId = formatPokeId(id);
  const capitilizedName = capitalCase(name);
  const pokemonTypes = types ? mapPokeTypeName(types) : [];
  const typographyVariant = "h5";

  const PokemonTypeIcons = () => {
    return (
      <TypeIconsContainer>
        {pokemonTypes.map((pokemonType) => {
          return (
            <PokemonTypeIcon
              key={pokemonType}
              pokemontype={pokemonType}
              src={`/icons/${pokemonType}.svg`}
              aria-label={pokemonType}
              alt="Type Icon"
            />
          );
        })}
      </TypeIconsContainer>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <SpriteIdBg pokemontypes={pokemonTypes} />
        <SpriteAndIdContainer id={id}>
          <Sprite id={id} src={id < 650 ? animatedSrc : src} alt="pokemon" />
          <Typography variant={typographyVariant}>No. {displayId}</Typography>
        </SpriteAndIdContainer>
        <NameIconsAndButtonContainer>
          <NameAndIconsContainer>
            <Typography variant={typographyVariant}>
              {capitilizedName}
            </Typography>
            {matches && <PokemonTypeIcons />}
          </NameAndIconsContainer>
          <IconButton size="large" color="inherit" aria-label="Add to team">
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </NameIconsAndButtonContainer>
      </Background>
    </ThemeProvider>
  );
};

export default IdentifactionPlate;
