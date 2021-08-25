import { useEffect, useState } from "react";
import { capitalCase, filterLanguage, queryApi } from "../../util";

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
      {movesData.map((move) => {
        const name = filterLanguage(move.names, "name", "en");

        return (
          <tr>
            <td>{capitalCase(name)}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default MovesTable;
