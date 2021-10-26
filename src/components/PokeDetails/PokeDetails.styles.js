import { Paper, styled } from "@mui/material";

export const PokemonDetailsPaper = styled(Paper)({
  overflow: "hidden",
});

export const PrimaryInfoWrapper = styled("div")({
  display: "flex",
  width: "100%",
});

export const EvolutionAndAbilitiesWrapper = styled("div")({
  width: "53%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});
