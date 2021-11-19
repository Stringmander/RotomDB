import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { capitalCase, useContextFilter } from "../../util";

const FlavorTextTable = ({ flavorTextEntries }) => {
  const flavorText = useContextFilter(flavorTextEntries);

  const FlavorTextCells = () => {
    return flavorText.map(({ flavor_text, version, language }, i) => {
      return (
        <TableCell key={`${version.name}-${language.name}`} align="center">
          <Tooltip title={flavor_text} placement="top">
            <div>
              <Typography variant="tooltip">
                {`Pokémon ${capitalCase(version.name)}`}
              </Typography>
            </div>
          </Tooltip>
        </TableCell>
      );
    });
  };

  return (
    <>
      <Toolbar variant="table-heading">
        <Typography variant="subtitle2">Flavor Text</Typography>
      </Toolbar>
      <Table>
        <TableBody>
          <TableRow>
            <FlavorTextCells />
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default FlavorTextTable;
