import { PokemonTeamWrapper } from "./PokemonTeam.styles";
import TeamAvatar from "../TeamAvatar";
import { mapPokeTypeName } from "../../util";

function PokemonTeam({ team, setResult }) {
  return (
    <PokemonTeamWrapper className="PokemonTeam">
      {team &&
        team.map(({ id, name, types }, index) => {
          const pokeTypes = mapPokeTypeName(types);
          return (
            <TeamAvatar
              id={id}
              name={name}
              types={pokeTypes}
              pokemon={team[index]}
              setResult={setResult}
            />
          );
        })}
    </PokemonTeamWrapper>
  );
}

export default PokemonTeam;
