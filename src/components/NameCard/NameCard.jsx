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
  const displayId = formatPokeId(id);
  const capitilizedName = capitalCase(name);
  const pokeTypes = types ? mapPokeTypeName(types) : [];

  return (
    <NameCard>
      <SpriteIdBg accent={pokeTypes} />
      <SpriteImgContainer>
        <img src={src} alt="pokemon" />
        <IdTypography variant={TypographyVariant}>No. {displayId}</IdTypography>
      </SpriteImgContainer>
      <NameTypography variant={TypographyVariant}>
        {capitilizedName}
      </NameTypography>
    </NameCard>
  );
};

export default PokeNameCard;
