import Styled from "styled-components";
import { typeColor } from "../../themes";

export const PokemonBGWrapper = Styled.div`

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: #FDE6E7;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
`;

export const PokemonBGMidground = Styled.div`
    position: relative;
    z-index: 1;
    top: -100%;
    clip-path: ${({ shift }) =>
      shift
        ? "polygon(70% 0, 100% 0, 100% 100%, 55% 100%)"
        : "polygon(0 0, 30% 0, 50% 100%, 0 100%)"};
    transition: clip-path 0.3s ease-in-out;
    height: 100%;

    opacity: 0.85;
    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.15));
    /* ${({ accent }) => `
      background-image: url(/icons/${accent[0]}.svg);
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: 10rem center;
    `} */
    ${({ accent }) => {
      const css =
        accent.length > 1
          ? `
            animation: 6s ease-in infinite alternate typeColors;
            
            @keyframes typeColors {
              from {
                background-color: ${typeColor[accent[0]]};
              }
              to {
                background-color: ${typeColor[accent[1]]};
              }
            }
          `
          : `
            background-color: ${typeColor[accent[0]]};
          `;
      return css;
    }}
`;

export const PokemonBGForeground = Styled.div`
    position: relative;
    z-index: 2;
    clip-path: ${({ shift }) =>
      shift
        ? "polygon(70% 0, 80% 0, 65% 100%, 55% 100%)"
        : "polygon(30% 0, 40% 0, 55% 100%, 45% 100%)"};;
    transition: clip-path 0.3s ease-in-out;
    height: 100%;
    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.15));
    ${({ accent }) => {
      const css =
        accent.length > 1
          ? `
            animation: 6s ease-in infinite alternate typeColors;
            
            @keyframes typeColors {
              from {
                background-color: ${typeColor[accent[0]]};
              }
              to {
                background-color: ${typeColor[accent[1]]};
              }
            }
          `
          : `
            background-color: ${typeColor[accent[0]]};
          `;
      return css;
    }}
`;
