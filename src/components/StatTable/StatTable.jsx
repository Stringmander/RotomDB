import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { capitalCase, massageStats } from "../../util";

const StatTable = ({ stats }) => {
  const massagedStats = massageStats(stats);
  const keys = Object.keys(massagedStats);
  const values = Object.values(massagedStats);

  return (
    <TableContainer>
      <TableBody>
        {keys.map((label, baseStat) => {
          return (
            <TableRow className="Row" key={label}>
              <TableCell align="left">{values[baseStat]}</TableCell>
              <TableCell align="left">{capitalCase(label)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

export default StatTable;
