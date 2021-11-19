import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../context";
import { capitalCase } from "../../util";

const AbilityTable = ({ apiData, abilities }) => {
  const lang = useContext(LanguageContext);

  const AbilityCells = () => {
    return apiData.map((ability, i) => {
      const effectText = ability.effect_entries.find(
        ({ language }) => language.name === lang.name
      ).effect;

      return (
        <TableCell
          key={ability.name}
          variant="supplemental-body"
          align="center"
        >
          <Tooltip title={effectText}>
            <div>
              <Typography variant="tooltip">
                {capitalCase(ability.name)}
              </Typography>
              {abilities[i].is_hidden && (
                <div>
                  <Typography variant="tooltip">(hidden)</Typography>
                </div>
              )}
            </div>
          </Tooltip>
        </TableCell>
      );
    });
  };

  return (
    <>
      <Toolbar variant="table-heading">
        <Typography variant="subtitle2">Abilities</Typography>
      </Toolbar>
      <Table>
        <TableBody>
          <TableRow>
            <AbilityCells />
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default AbilityTable;
