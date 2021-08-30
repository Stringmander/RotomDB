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

  useEffect(async () => {
    // generation that serves as cutoff point for moves data
    const targetGen = "red-blue";

    // filters moves based on targetGen
    const filteredMoves = moves.filter(({ version_group_details }) => {
      const endpoint = version_group_details.filter(
        (detail) => detail.version_group.name === targetGen
      );
      return endpoint.length > 0;
    });

    // array of endpoints that serve move data
    const moveEndpoints = filteredMoves.map(({ move }) => move.url);

    // array of promises that serve filtered moves data
    const movePromisesArray = moveEndpoints.map((endpoint) =>
      queryApi(endpoint)
    );

    // awaits array of promises, serves moves data from 1st gen to target gen
    const resolvedMovePromisesArray = await Promise.all(movePromisesArray);

    // sets movesData in state that is then rendered in the DOM
    setMovesData(resolvedMovePromisesArray);
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
          <th>Gen</th>
        </tr>
      </thead>
      <tbody>
        {movesData.map(
          ({ names, type, damage_class, power, accuracy, pp }, i) => {
            const name = filterLanguage(names, "name", "en");
            const moveType = type.name;
            const moveClass = damage_class.name;

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
