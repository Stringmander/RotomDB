import {
  theme,
  NameCard,
  SpriteIdBg,
  SpriteContainer,
  Sprite,
  NameContainer,
} from "./NameCard.styles";
import { capitalCase, formatPokeId, mapPokeTypeName } from "../../util";
import { ThemeProvider } from "styled-components";
import { Typography } from "@material-ui/core";

const PokeNameCard = ({ id, name, types }) => {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const animatedSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const displayId = formatPokeId(id);
  const capitilizedName = capitalCase(name);
  const pokeTypes = types ? mapPokeTypeName(types) : [];
  const textColor = "common.white";
  const typographyVariant = "h5";

  return (
    <ThemeProvider theme={theme}>
      <NameCard className="NameCard">
        <SpriteIdBg accent={pokeTypes} />
        <SpriteContainer id={id}>
          <Sprite id={id} src={id < 650 ? animatedSrc : src} alt="pokemon" />
          <Typography variant={typographyVariant} color={textColor}>
            No. {displayId}
          </Typography>
        </SpriteContainer>
        <NameContainer>
          <Typography variant={typographyVariant} color={textColor}>
            {capitilizedName}
          </Typography>
        </NameContainer>
      </NameCard>
    </ThemeProvider>
  );
};

export default PokeNameCard;
