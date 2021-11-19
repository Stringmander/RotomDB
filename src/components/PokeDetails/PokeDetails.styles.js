import { Paper, styled } from "@mui/material";

export const PokemonDetailsPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  [theme.breakpoints.up("sm")]: {
    position: "absolute",
    left: "50%",
    top: "62%",
    marginRight: "-50%",
    transform: "translate(-50%, -62%)",
    width: 1200,
    height: 792,
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

export const PrimaryInfoColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    width: "75%",
  },
}));

export const SupplementalInfoColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
}));

export const StatWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "40vh",
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
