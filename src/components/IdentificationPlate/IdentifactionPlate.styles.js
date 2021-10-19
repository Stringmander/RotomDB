import { styled } from "@mui/material";
import { typeColors } from "../../themes";

// export const theme = createTheme({
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           padding: ".2rem 0 0 0",
//         },
//       },
//     },
//   },
// });

export const Background = styled("div")({
  width: "100%",
  height: "3rem",
  display: "flex",
  backgroundColor: "black",
});

export const SpriteIdBg = styled("div")(({ pokemontypes }) => {
  const style = {
    position: "relative",
    zIndex: "0",
    width: "20%",
    clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
  };

  const styleWithAccent =
    pokemontypes.length > 1
      ? Object.assign(style, {
          animation: `
    animation: 3s ease-in infinite alternate typeColors;
      
    animation-name: typeColors;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes typeColors {
      from {
        background-color: ${typeColors[pokemontypes[0]].hex};
      }
      to {
        background-color: ${typeColors[pokemontypes[1]].hex};
      }
    }
    `,
        })
      : Object.assign(style, {
          backgroundColor: `${typeColors[pokemontypes[0]].hex}`,
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
  margin: "0 0 0 1rem",
});

export const PokemonTypeIcon = styled("img")(({ pokemontype }) => ({
  height: "2rem",
  margin: "5px",
  filter: `${typeColors[pokemontype].filter}`,
}));
