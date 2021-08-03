import { useState } from "react";
import {
  NameCard,
  SpriteIdBg,
  SpriteImgContainer,
  IdTypography,
  NameTypography,
} from "./TeamAvatar.styles";
import { capitalCase, formatPokeId } from "../../util";

const TypographyVariant = "h5";

const TeamAvatar = ({ id, name, types, pokemon, setResult }) => {
  const [src, setSrc] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  );
  const displayId = formatPokeId(id);
  const capitilizedName = capitalCase(name);

  return (
    <NameCard
      accent={types}
      onMouseEnter={() => {
        setSrc(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
        );
        document.querySelector(`#pokemonImage${id}`).style.padding = "1rem";
        document.querySelector(`#pokemonImage${id}`).style.marginLeft = "0";
      }}
      onMouseLeave={() => {
        setSrc(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        );
        document.querySelector(`#pokemonImage${id}`).style.padding = "0";
        document.querySelector(`#pokemonImage${id}`).style.marginLeft =
          "-0.6rem";
      }}
      onClick={() => {
        setResult(pokemon);
      }}
    >
      <SpriteIdBg className="SpriteIdBg" accent={types} />
      <SpriteImgContainer className="SpriteImgContainer">
        <img id={`pokemonImage${id}`} src={src} alt="pokemon" />
        <IdTypography className="IdTypography" variant={TypographyVariant}>
          No. {displayId}
        </IdTypography>
      </SpriteImgContainer>
      <NameTypography className="NameTypography" variant={TypographyVariant}>
        {capitilizedName}
      </NameTypography>
    </NameCard>
  );
};

export default TeamAvatar;
