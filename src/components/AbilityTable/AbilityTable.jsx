import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useContext } from "react";
import { LanguageContext } from "../../context";
import { capitalCase, useMappedFetch } from "../../util";

const AblitiyTable = ({ abilities }) => {
  const lang = useContext(LanguageContext);

  const { isLoading, apiData, serverError } = useMappedFetch(
    abilities,
    "ability"
  );

  const AbilityRows = ({ lang }) =>
    apiData.map((ability, i) => {
      const effectText = ability.effect_entries.find(
        ({ language }) => language.name === lang.name
      ).effect;

      return (
        <TableRow key={ability.name + i}>
          <TableCell>{capitalCase(ability.name)}</TableCell>
          <TableCell>{effectText}</TableCell>
        </TableRow>
      );
    });

  return (
    <TableContainer>
      <Table>
        <TableBody>
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
            <AbilityRows lang={lang} />
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AblitiyTable;
