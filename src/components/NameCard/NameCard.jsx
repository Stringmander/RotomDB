import {
  NameCard,
  SpriteIdBg,
  SpriteImgContainer,
  IdTypography,
  NameTypography,
} from "./NameCard.styles";
import { capitalCase, formatPokeId } from "../../util";

const TypographyVariant = "h5";

const PokeNameCard = ({ id, name, types }) => {
  const displayId = formatPokeId(id);
  // const typeThemed = getPokeColor(types);
  const capitilizedName = capitalCase(name);

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <NameCard>
      <SpriteIdBg accent={types} />
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
