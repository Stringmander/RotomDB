import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { capitalCase, massageStats } from "../../util";
import { StatTableContainer } from ".";

const StatTable = ({ stats }) => {
  const massagedStats = massageStats(stats);
  const keys = Object.keys(massagedStats);
  const values = Object.values(massagedStats);

  return (
    <StatTableContainer>
      <Table>
        <TableBody>
          {keys.map((label, baseStat) => {
            return (
              <TableRow className="Row" key={label}>
                <TableCell align="left">{capitalCase(label)}</TableCell>
                <TableCell align="left">{values[baseStat]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </StatTableContainer>
  );
};

export default StatTable;
