import { TypeBadgeBackground, TypeBadgeTypography, TypeIcon } from ".";
import { capitalCase } from "../../util";

function PokemonTypeBadge({ type }) {
  return (
    <TypeBadgeBackground type={type}>
      <TypeIcon src={`/icons/${type}.svg`} alt="pokemon" />
      <TypeBadgeTypography variant="h5">
        {capitalCase(type)}
      </TypeBadgeTypography>
    </TypeBadgeBackground>
  );
}

export default PokemonTypeBadge;
