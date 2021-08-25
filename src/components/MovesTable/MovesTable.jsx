import { useEffect, useState } from "react";
import { capitalCase, filterLanguage, queryApi } from "../../util";
import { TypeCell } from "./MovesTable.styles";

const MovesTable = ({ moves }) => {
  const [movesData, setMovesData] = useState([]);

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

            return (
              <tr key={`${name}_${i}`}>
                <td>{capitalCase(name)}</td>
                <TypeCell type={type.name}>{capitalCase(type.name)}</TypeCell>
                <td>{capitalCase(damage_class.name)}</td>
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
