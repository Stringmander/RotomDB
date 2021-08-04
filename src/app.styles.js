import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  > .PokemonTeam {
    position: absolute !important;
  }
  > .PokemonSearch {
    position: absolute !important;
    top: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  > .PokeDetails {
    width: 75rem;
    max-height: 50vh;
    margin: auto;
  }
`;
