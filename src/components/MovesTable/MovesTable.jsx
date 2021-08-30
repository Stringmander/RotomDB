import { useEffect, useState } from "react";
import { capitalCase, filterLanguage, queryApi } from "../../util";
import { TypeCell } from "./MovesTable.styles";

const MovesTable = ({ moves }) => {
  const [movesData, setMovesData] = useState([]);

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
        {movesData !== [] &&
          movesData.map(
            (
              { names, type, damage_class, power, accuracy, pp, generation },
              i
            ) => {
              // console.log(names)
              const name = filterLanguage(names, "name", "en");

              return (
                <tr key={`${name}_${i}`}>
                  <td>{capitalCase(name)}</td>
                  <TypeCell type={type.name}>{capitalCase(type.name)}</TypeCell>
                  <td>{capitalCase(damage_class.name)}</td>
                  <td>{power ? power : "—"}</td>
                  <td>{accuracy ? `${accuracy}%` : "—"}</td>
                  <td>{pp}</td>
                  <td>{generation.name}</td>
                </tr>
              );
            }
          )}
      </tbody>
    </table>
  );
};

export default MovesTable;
