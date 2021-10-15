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
import { capitalCase, formatPokeId, mapPokeTypeName } from "../../util";
import { IconButton, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

const IdentifactionPlate = ({ id, name, types }) => {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const animatedSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const displayId = formatPokeId(id);
  const capitilizedName = capitalCase(name);
  const pokemonTypes = types ? mapPokeTypeName(types) : [];
  const textColor = "common.white";
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
    <Background>
      <SpriteIdBg pokemontypes={pokemonTypes} />
      <SpriteAndIdContainer id={id}>
        <Sprite id={id} src={id < 650 ? animatedSrc : src} alt="pokemon" />
        <Typography variant={typographyVariant} color={textColor}>
          No. {displayId}
        </Typography>
      </SpriteAndIdContainer>
      <NameIconsAndButtonContainer>
        <NameAndIconsContainer>
          <Typography variant={typographyVariant} color={textColor}>
            {capitilizedName}
          </Typography>
          <PokemonTypeIcons />
        </NameAndIconsContainer>
        <IconButton size="large" color="inherit" aria-label="Add to team">
          <AddCircle fontSize="large" />
        </IconButton>
      </NameIconsAndButtonContainer>
    </Background>
  );
};

export default IdentifactionPlate;
