import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { height: 40px; width: 40px; }
 100% { height: 70px; width: 70px; }
 `;

export const PokemonTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  max-width: 25rem;
  margin: 1rem;
  > div > div > img {
    transform: scale(0.75);
    overflow: visible;
  }
`;

export const TeamAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  padding: 0 0;
  transition: transform 0.45s ease-in-out;
  transition: padding 0.3s ease-in-out;
  .PokemonTeamName {
    opacity: 0;
    font-weight: bold;
    margin-left: 0.75rem;
    transition: margin-left 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
  }

  :hover {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1.5);
    position: block;
    padding: 1rem 1rem;
    transition: transform 0.45s ease-in-out;
    transition: padding 0.3s ease-in-out;
    > .PokemonTeamName {
      opacity: 1;
      font-weight: bold;
      margin-left: 0.75rem;
      transition: margin-left 0.3s ease-in-out;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;
