import { PokemonTeamWrapper } from "./PokemonTeam.styles";
import Avatar from "@material-ui/core/Avatar";
import { TeamAvatarWrapper } from "./PokemonTeam.styles";
import { capitalCase } from "../../util";

function PokemonTeam({ team }) {
  return (
    <PokemonTeamWrapper>
      {typeof team !== "string" &&
        team.length > 0 &&
        team.map((pokemon, index) => {
          return (
            <TeamAvatarWrapper>
              <Avatar
                alt={`${pokemon.name}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                style={{
                  background: `url(${
                    pokemon.types.map((i) => `/img/${i.type.name}.png`)[0]
                  })`,
                }}
              />
              <p className="PokemonTeamName">{capitalCase(pokemon.name)}</p>
            </TeamAvatarWrapper>
          );
        })}
    </PokemonTeamWrapper>
  );
}

export default PokemonTeam;
