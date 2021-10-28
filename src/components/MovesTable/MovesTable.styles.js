import { styled } from "@mui/material";
import { pokemonTypeColors } from "../../themes";

export const TypeCell = styled("td")(({ type }) => ({
  color: "white",
  backgroundColor: pokemonTypeColors[type].hex,
}));
