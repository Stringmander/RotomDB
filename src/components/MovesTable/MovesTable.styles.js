import { styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { pokemonTypeColors } from "../../themes";

export const useStyles = makeStyles({
  root: {
    "& .normal-type-cell": {
      backgroundColor: pokemonTypeColors["normal"].hex,
    },
    "& .fire-type-cell": {
      backgroundColor: pokemonTypeColors["fire"].hex,
    },
    "& .water-type-cell": {
      backgroundColor: pokemonTypeColors["water"].hex,
    },
    "& .grass-type-cell": {
      backgroundColor: pokemonTypeColors["grass"].hex,
    },
    "& .electric-type-cell": {
      backgroundColor: pokemonTypeColors["electric"].hex,
    },
    "& .ice-type-cell": {
      backgroundColor: pokemonTypeColors["ice"].hex,
    },
    "& .fighting-type-cell": {
      backgroundColor: pokemonTypeColors["fighting"].hex,
    },
    "& .poison-type-cell": {
      backgroundColor: pokemonTypeColors["poison"].hex,
    },
    "& .ground-type-cell": {
      backgroundColor: pokemonTypeColors["ground"].hex,
    },
    "& .flying-type-cell": {
      backgroundColor: pokemonTypeColors["flying"].hex,
    },
    "& .psychic-type-cell": {
      backgroundColor: pokemonTypeColors["psychic"].hex,
    },
    "& .bug-type-cell": {
      backgroundColor: pokemonTypeColors["bug"].hex,
    },
    "& .rock-type-cell": {
      backgroundColor: pokemonTypeColors["rock"].hex,
    },
    "& .ghost-type-cell": {
      backgroundColor: pokemonTypeColors["ghost"].hex,
    },
    "& .dragon-type-cell": {
      backgroundColor: pokemonTypeColors["dragon"].hex,
    },
    "& .dark-type-cell": {
      backgroundColor: pokemonTypeColors["dark"].hex,
    },
    "& .steel-type-cell": {
      backgroundColor: pokemonTypeColors["steel"].hex,
    },
    "& .fairy-type-cell": {
      backgroundColor: pokemonTypeColors["fairy"].hex,
    },
  },
});

export const MovesTableWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));
