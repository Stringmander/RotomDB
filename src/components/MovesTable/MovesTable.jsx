import { useEffect, useState } from "react";
import {
  capitalCase,
  filterLanguage,
  queryApi,
  mapPokeTypeName,
} from "../../util";
import { TypeCell } from "./MovesTable.styles";

const MovesTable = ({ moves, pokeTypes }) => {
  const [movesData, setMovesData] = useState([]);
  const pokeTypesArr = mapPokeTypeName(pokeTypes);

  const determineSTAB = (moveType, moveClass) => {
    const StabTextStyle = pokeTypesArr.includes(moveType.name)
      ? moveClass.name === "physical" || moveClass.name === "special"
        ? { fontWeight: "bold" }
        : {}
      : {};
    return StabTextStyle;
  };

  useEffect(() => {
    const fetchMoves = async (moves) => {
      const moveEndpoints = moves.map(({ move }) => move.url);
      const movePromises = [];

      moveEndpoints.map((endpoint) => {
        return movePromises.push(queryApi(endpoint));
      });
      return Promise.all(movePromises).then((res) => setMovesData(res));
    };

    fetchMoves(moves);
  }, [moves]);

  return (
    <table>
      <thead>
        <tr>
          <th>Move</th>
          <th>Type</th>
          <th>Class</th>
          <th>Power</th>
          <th>Acc</th>
          <th>PP</th>
        </tr>
      </thead>
      <tbody>
        {movesData.map(
          ({ names, type, damage_class, power, accuracy, pp }, i) => {
            const name = filterLanguage(names, "name", "en");
            const moveType = type.name;
            const moveClass = damage_class.name;

            console.log(determineSTAB(type, damage_class));

            return (
              <tr key={`${name}_${i}`}>
                <td style={determineSTAB(type, damage_class)}>
                  {capitalCase(name)}
                </td>
                <TypeCell type={moveType}>{capitalCase(type.name)}</TypeCell>
                <td>{capitalCase(moveClass)}</td>
                <td>{power ? power : "—"}</td>
                <td>{accuracy ? `${accuracy}%` : "—"}</td>
                <td>{pp}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default MovesTable;
