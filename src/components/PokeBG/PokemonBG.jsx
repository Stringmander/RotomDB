import {
  PokemonBGWrapper,
  PokemonBGForeground,
  PokemonBGMidground,
} from "./PokemonBG.styles";

function PokemonBG({ shift, types }) {


  return (
    <PokemonBGWrapper shift={shift} accent={types}>
      {types && (
        <>
          <PokemonBGForeground shift={shift} accent={types} />
          <PokemonBGMidground shift={shift} accent={types} />
        </>
      )}
    </PokemonBGWrapper>
  );
}

export default PokemonBG;
