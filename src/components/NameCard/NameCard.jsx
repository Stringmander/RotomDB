import {
  NameCard,
  SpriteIdBg,
  SpriteImgContainer,
  IdTypography,
  NameTypography,
} from "./NameCard.styles";
import { capitalCase, formatPokeId, mapPokeTypeName } from "../../util";

const TypographyVariant = "h5";

const PokeNameCard = ({ id, name, types }) => {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const animatedSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const displayId = formatPokeId(id);
  const capitilizedName = capitalCase(name);
  const pokeTypes = types ? mapPokeTypeName(types) : [];

  return (
    <NameCard className="NameCard">
      <SpriteIdBg accent={pokeTypes} />
      <SpriteImgContainer id={id}>
        <img src={id < 650 ? animatedSrc : src} alt="pokemon" />
        <IdTypography variant={TypographyVariant}>No. {displayId}</IdTypography>
      </SpriteImgContainer>
      <NameTypography variant={TypographyVariant}>
        {capitilizedName}
      </NameTypography>
    </NameCard>
  );
};

export default PokeNameCard;
