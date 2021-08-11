import { Table, TableBody, TableRow } from "@material-ui/core";
import {
  TopRow,
  InfoCard,
  InfoCardBottomRow,
  StatTable,
  LabelCell,
  StatTableCell,
} from "./PokeDetails.styles";
import { capitalCase, massageStats } from "../../util";
import NameCard from "../NameCard";
import StatGraph from "../StatGraph";
import AblitiyTable from "../AbilityTable/AbilityTable";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types, stats, abilities } = result;

  const mapStatTableRows = (stats) => {
    const massagedStats = massageStats(stats);
    const keys = Object.keys(massagedStats);
    const values = Object.values(massagedStats);

    return keys.map((label, baseStat) => {
      return (
        <TableRow className="Row" key={label}>
          <LabelCell align="left">{capitalCase(label)}</LabelCell>
          <StatTableCell align="left">{values[baseStat]}</StatTableCell>
        </TableRow>
      );
    });
  };

  return id ? (
    <div className="PokeDetails">
      <InfoCard>
        <NameCard id={id} name={name} types={types} />
        <InfoCardBottomRow>
          <StatTable>
            <Table className="Table" size="small">
              <TableBody className="Body">{mapStatTableRows(stats)}</TableBody>
            </Table>
          </StatTable>
          <StatGraph stats={stats} types={types} />
          <AblitiyTable abilities={abilities} />
        </InfoCardBottomRow>
      </InfoCard>

      <button
        onClick={() => {
          addToTeam(result);
        }}
      >
        {" "}
        add to team{" "}
      </button>
    </div>
  ) : null;
};

export default PokeDetails;
