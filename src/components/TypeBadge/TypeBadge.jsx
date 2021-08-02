import { BadgeBg, BadgeTypography } from "./TypeBadge.styles";
import { capitalCase } from "../../util";

function PokeTypeBadge({ type }) {
  return (
    <BadgeBg type={type}>
      <img src={`/icons/${type}.svg`} alt="pokemon" />
      <BadgeTypography variant="h5">{capitalCase(type)}</BadgeTypography>
    </BadgeBg>
  );
}

export default PokeTypeBadge;
