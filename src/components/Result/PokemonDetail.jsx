import { useEffect } from "react";

function PokemonDetail(props) {
  const data = props.result;
  const { id, name, types, abilities, stats, sprites, status } = data;

  const CapitalCase = (string) =>
    [...string].map((char, i) => {
      const isLetter = /^[a-zA-Z]+$/.test(string[i - 1]);
      const parsedChar = !isLetter || i === 0 ? char.toUpperCase() : char;
      return parsedChar;
    });

  useEffect(() => {}, [data]);

  return (
    <div>
      {name ? (
        <>
          <div>
            <img src={`${sprites.front_default}`} alt="pokemon" />
          </div>
          <p>{CapitalCase(name)}</p>
          <p>{`Ndex #${id}`}</p>
          <h4>Types</h4>
          <ul>
            {types.map((i) => (
              <li>{CapitalCase(i.type.name)}</li>
            ))}
          </ul>
          <h4>Abilities</h4>
          <ul>
            {abilities.map((i) => (
              <li>{CapitalCase(i.ability.name)}</li>
            ))}
          </ul>
          <h4>Stats</h4>
          <ul>
            {stats.map((i) => (
              <li>
                {CapitalCase(i.stat.name)}: {i.base_stat}
              </li>
            ))}
          </ul>
        </>
      ) : status === 404 ? (
        <p>No pokemon with that name, try again</p>
      ) : null}
    </div>
  );
}

export default PokemonDetail;
