import { Paper, styled } from "@mui/material";

export const PokemonDetailsPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "fit-content",
    width: "80vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "96vw",
  },
}));

export const LgRowWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const StatWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const EvolutionAndAbilitiesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: `${theme.spacing(6)}`,
  [theme.breakpoints.up("sm")]: {
    // height: "50%",
    justifyContent: "space-between",
  },
}));

export const PrimaryInfoColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    width: "55%",
  },
}));

export const AuxiliaryInfoColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    width: "45%",
  },
}));
