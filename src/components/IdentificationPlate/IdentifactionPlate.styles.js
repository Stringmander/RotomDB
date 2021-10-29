import { styled, Typography } from "@mui/material";
import { pokemonTypeColors } from "../../themes";

export const IdentificationPlateTypography = styled(Typography)({
  padding: ".3rem 0 0 0",
  color: "white",
});

export const Background = styled("div")({
  width: "100%",
  height: "3rem",
  display: "flex",
  backgroundColor: "black",
});

export const SpriteIdBg = styled("div")(({ pokemontypes, theme }) => {
  const style = {
    position: "relative",
    zIndex: "0",
    [theme.breakpoints.down("sm")]: {
      width: "55%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
    clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
  };

  const styleWithAccent =
    pokemontypes.length > 1
      ? Object.assign(style, {
          animation: `
    animation: 3s ease-in infinite alternate pokemonTypeColors;
      
    animation-name: pokemonTypeColors;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes pokemonTypeColors {
      from {
        background-color: ${pokemonTypeColors[pokemontypes[0]].hex};
      }
      to {
        background-color: ${pokemonTypeColors[pokemontypes[1]].hex};
      }
    }
    `,
        })
      : Object.assign(style, {
          backgroundColor: `${pokemonTypeColors[pokemontypes[0]].hex}`,
        });

  return styleWithAccent;
});

export const SpriteAndIdContainer = styled("div")({
  position: "absolute",
  height: "3rem",
  zIndex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Sprite = styled("img")(({ id }) => ({
  maxHeight: "80px",
  maxWidth: "80px",
  padding: `${id < 650 ? "1rem" : "0"}`,
}));

export const NameIconsAndButtonContainer = styled("div")({
  display: "flex",
  flexGrow: "1",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
});

export const NameAndIconsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const TypeIconsContainer = styled("div")({
  display: "flex",
  margin: "0 0 0 1rem",
  alignItems: "center",
});

export const PokemonTypeIcon = styled("img")(({ pokemontype }) => ({
  height: "2rem",
  margin: "5px",
  filter: `${pokemonTypeColors[pokemontype].filter}`,
}));
