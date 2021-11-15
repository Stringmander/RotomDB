import { CatchingPokemon } from "@mui/icons-material";
import { styled } from "@mui/material";

export const RotatingCatchingPokemon = styled(CatchingPokemon)({
  margin: "auto",
  fontSize: "5rem",
  animation: "rotate infinite 1s linear",

  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },

    to: {
      transform: "rotate(360deg)",
    },
  },
});
