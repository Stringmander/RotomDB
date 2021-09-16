import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context";
import { capitalCase, filterLanguage, mapPokeTypeName } from "../../util";
import mappedQuery from "../../util/mappedQuery";
import useVersionGroupFilter from "../../util/useVersionGroupFilter";
import { TypeCell } from "./MovesTable.styles";

const MovesTable = ({ moves, pokeTypes }) => {
  const [movesData, setMovesData] = useState([]);
  const pokeTypesArr = mapPokeTypeName(pokeTypes);
  const lang = useContext(LanguageContext);

  const determineSTAB = (moveType, moveClass) => {
    const StabTextStyle = pokeTypesArr.includes(moveType.name)
      ? moveClass.name === "physical" || moveClass.name === "special"
        ? { fontWeight: "bold" }
        : {}
      : {};
    return StabTextStyle;
  };

  const filteredMoves = useVersionGroupFilter(moves);

  useEffect(() => {
    (async () => {
      const fetchedMoves = await mappedQuery(filteredMoves, "move");
      setMovesData(fetchedMoves);
    })();
  }, []);

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
            const name = filterLanguage(names, "name", lang);
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
