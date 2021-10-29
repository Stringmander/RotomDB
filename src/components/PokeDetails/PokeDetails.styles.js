import { Paper, styled } from "@mui/material";

export const PokemonDetailsPaper = styled(Paper)({
  overflow: "hidden",
});

export const PrimaryInfoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "40vh",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const StatWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const EvolutionAndAbilitiesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: `${theme.spacing(6)}`,
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    justifyContent: "space-between",
  },
}));
