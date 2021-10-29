import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { massageStats } from "../../util";
import { StatTableContainer } from ".";
import {
  Addchart,
  Favorite,
  FitnessCenter,
  Grade,
  Security,
  Shield,
  Speed,
} from "@mui/icons-material";

const StatLabelIconInterface = {
  hp: <Favorite />,
  attack: <FitnessCenter />,
  defense: <Shield />,
  "special-attack": <Grade />,
  "special-defense": <Security />,
  speed: <Speed />,
  total: <Addchart />,
};

const StatTable = ({ stats }) => {
  const massagedStats = massageStats(stats);
  const keys = Object.keys(massagedStats);
  console.log(keys);
  const values = Object.values(massagedStats);
  console.log(values);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const StatTable = () => {
    const cellAlignment = "center";
    const typographyVariant = "body2";

    if (matches) {
      return (
        <TableBody>
          {keys.map((label, i) => {
            return (
              <TableRow className="Row" key={label}>
                <TableCell align={cellAlignment}>
                  {StatLabelIconInterface[label]}
                </TableCell>
                <TableCell align={cellAlignment}>
                  <Typography variant={typographyVariant}>
                    {values[i]}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      );
    } else {
      return (
        <>
          <TableHead>
            <TableRow>
              {keys.map((label) => {
                return (
                  <TableCell key={label} align={cellAlignment}>
                    {StatLabelIconInterface[label]}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {values.map((baseStat, i) => {
                return (
                  <TableCell key={`${i}-${baseStat}`} align={cellAlignment}>
                    <Typography variant={typographyVariant}>
                      {baseStat}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </>
      );
    }
  };

  return (
    <StatTableContainer>
      <Table size="small" padding="none">
        <StatTable />
      </Table>
    </StatTableContainer>
  );
};

export default StatTable;
