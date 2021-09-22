import { useContext } from "react";
import { LanguageContext } from "../../context";
import { capitalCase, mapPokeTypeName, useMappedFetch } from "../../util";
import useVersionGroupFilter from "../../util/useVersionGroupFilter";
import { TypeCell } from "./MovesTable.styles";

const MovesTable = ({ moves, pokeTypes }) => {
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

  const { isLoading, apiData, serverError } = useMappedFetch(
    filteredMoves,
    "move"
  );

  const TableRows = ({ lang }) =>
    apiData.map(({ names, type, damage_class, power, accuracy, pp }, i) => {
      const moveName = names.find(({ language }) => language.name === lang.name)
        .name;
      const moveType = type.name;
      const moveClass = damage_class.name;

      return (
        <tr key={`${moveName}_${i}`}>
          <td style={determineSTAB(type, damage_class)}>
            {capitalCase(moveName)}
          </td>
          <TypeCell type={moveType}>{capitalCase(type.name)}</TypeCell>
          <td>{capitalCase(moveClass)}</td>
          <td>{power ? power : "—"}</td>
          <td>{accuracy ? `${accuracy}%` : "—"}</td>
          <td>{pp}</td>
        </tr>
      );
    });

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
        {isLoading && (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
        {!isLoading && serverError ? (
          (console.log(serverError),
          (
            <tr>
              <td>Error in fetching data</td>
            </tr>
          ))
        ) : apiData !== null ? (
          <TableRows lang={lang} />
        ) : (
          <tr>
            <td>It's a wild MissingNo.!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MovesTable;
