import { createTheme, styled, responsiveFontSizes } from "@material-ui/core";
import { typeColor } from "../../themes";

export let theme = createTheme();
theme = responsiveFontSizes(theme);

// {
//   components: {
//     MuiTypography: {
//       variants: [
//         {
//           props: { variant: "pokemonName" },
//           style: {
//             margin: "5px",
//           },
//         },
//       ],
//     },
//   },
// }

export const NameCard = styled("div")({
  width: "100%",
  height: "3rem",
  display: "flex",
  backgroundColor: "black",
});

export const SpriteIdBg = styled("div")(({ accent }) => {
  const style = {
    position: "relative",
    zIndex: "0",
    width: "30%",
    clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
  };

  const styleWithAccent =
    accent.length > 1
      ? Object.assign(style, {
          animation: `
    animation: 3s ease-in infinite alternate typeColors;
      
    animation-name: typeColors;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes typeColors {
      from {
        background-color: ${typeColor[accent[0]]};
      }
      to {
        background-color: ${typeColor[accent[1]]};
      }
    }
    `,
        })
      : Object.assign(style, { backgroundColor: `${typeColor[accent[0]]}` });

  return styleWithAccent;
});

export const SpriteContainer = styled("span")({
  position: "absolute",
  height: "3rem",
  zIndex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const NameContainer = styled("span")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const Sprite = styled("img")(({ id }) => ({
  maxHeight: "80px",
  maxWidth: "80px",
  padding: `${id < 650 ? "1rem" : "0"}`,
}));
