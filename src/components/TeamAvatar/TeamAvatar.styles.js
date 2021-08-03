import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { typeColor } from "../../themes";

export const NameCard = styled(Card)`
  && {
    height: 4.5rem;
    width: 4.5rem;
    transition: all 0.3s ease-in-out;
    display: flex;
    margin: 5px;
    cursor: pointer;
    overflow: hidden;
    ${({ accent }) => {
      const css =
        accent.length > 1
          ? `
            animation: 3s ease-in infinite alternate typeColors;
            
            @keyframes typeColors {
              from {
                background-color: ${typeColor[accent[0]]} !important;
              }
              to {
                background-color: ${typeColor[accent[1]]} !important;
              }
            }
          `
          : `
            background-color: ${typeColor[accent[0]]} !important;
          `
      return css;
    }}

    > .SpriteImgContainer > .IdTypography {
      opacity: 0 !important;
      transition: opacity 0.15s ease-in-out;
    }

    > .NameTypography {
      opacity: 0 !important;
      transition: opacity 0.15s ease-in-out;
    }
  }
  :hover {
    width: 35rem;
    background-color: black !important;
    transition: width 0.3s ease-in-out;

    > .SpriteImgContainer > .IdTypography {
      opacity: 1 !important;
      transition: opacity 0.75s ease-in-out;
    }

    > .NameTypography {
      opacity: 1 !important;
      transition: opacity 0.75s ease-in-out;
    }
  }
`;

export const SpriteIdBg = styled.div`
  position: relative;
  z-index: 0;
  width: 40%;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  ${({ accent }) => {
    const css =
      accent.length > 1
        ? `
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
    `
        : `
      background-color: ${typeColor[accent[0]]}
    `;
    return css;
  }}
`;

export const SpriteImgContainer = styled.span`
  && {
    position: absolute;
    height: 4.5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > img {
    position: relative;
    margin-left: -0.65rem;
  }
`;

export const IdTypography = styled(Typography)`
  && {
    color: white;
  }
`;

export const NameTypography = styled(IdTypography)`
  && {
    margin: auto 0;
  }
`;
