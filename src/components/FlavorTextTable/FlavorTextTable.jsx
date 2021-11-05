import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { capitalCase, useContextFilter } from "../../util";

const FlavorTextTable = ({ speciesRes }) => {
  const { isLoading, serverError, apiData } = speciesRes;
  const flavorTextEntries = apiData === null ? [] : apiData.flavor_text_entries;
  const flavorText = useContextFilter(flavorTextEntries);

  const TableRows = () =>
    flavorText.map((flavorText) => {
      return (
        <TableRow key={flavorText.version.name}>
          <TableCell>
            <Typography variant="body2">
              Pokémon {capitalCase(flavorText.version.name)}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2">{flavorText.flavor_text}</Typography>
          </TableCell>
        </TableRow>
      );
    });

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : apiData !== null ? (
        <TableContainer>
          <Table>
            <TableBody>
              <TableRows />
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default FlavorTextTable;
