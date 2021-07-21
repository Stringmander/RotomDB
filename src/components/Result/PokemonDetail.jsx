import { useEffect } from "react";

function PokemonDetail(props) {
  const data = props.result;
  const { id, name, types, abilities, stats, sprites, status } = data;

  let capitalizeFirstLetter = (string) => {
    if (string === "hp") {
      return string.toUpperCase();
    } else {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };

  useEffect(() => {}, [data]);

  return (
    <div>
      {name ? (
        <>
          <div>
            <img src={`${sprites.front_default}`} alt="pokemon" />
          </div>
          <p>{capitalizeFirstLetter(name)}</p>
          <p>{`Ndex #${id}`}</p>
          <h4>Types</h4>
          <ul>
            {types.map((i) => (
              <li>{capitalizeFirstLetter(i.type.name)}</li>
            ))}
          </ul>
          <h4>Abilities</h4>
          <ul>
            {abilities.map((i) => (
              <li>{capitalizeFirstLetter(i.ability.name)}</li>
            ))}
          </ul>
          <h4>Stats</h4>
          <ul>
            {stats.map((i) => (
              <li>
                {capitalizeFirstLetter(i.stat.name)}: {i.base_stat}
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
