import { styled, Typography } from "@mui/material";
import { pokemonTypeColors } from "../../themes";

export const TypeBadgeBackground = styled("div")(({ type }) => ({
  width: "9rem",
  height: "3rem",
  display: "flex",
  borderRadius: "5px",
  margin: "5px",
  padding: "5px",
  alignItems: "center",
  backgroundColor: pokemonTypeColors[type].hex,
}));

export const TypeIcon = styled("img")({
  height: "100%",
  filter: "invert()",
});

export const TypeBadgeTypography = styled(Typography)({
  margin: "auto 1rem",
  padding: "0.3rem 0 0 0",
  color: "white",
});
