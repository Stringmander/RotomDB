import styled from "styled-components";

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
  transition: all 0.3s ease-in-out;

  .PokemonTeamName {
    opacity: 0;
    font-weight: bold;
    margin-left: 0.75rem;
    transition: all 0.3s ease-in-out;
  }

  :hover {
    transform: scale(1.5);
    padding: 1rem 1rem;
    > .PokemonTeamName {
      opacity: 1;
    }
  }
`;
