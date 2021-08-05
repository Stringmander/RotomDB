import { Table, TableBody, TableRow } from "@material-ui/core";
import {
  TopRow,
  ArtworkCard,
  InfoCard,
  InfoCardBottomRow,
  StatTable,
  LabelCell,
  StatTableCell,
} from "./PokeDetails.styles";
import { capitalCase, massageStats } from "../../util";
import NameCard from "../NameCard";
import StatGraph from "../StatGraph";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types, stats } = result;

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
      <TopRow>
        <ArtworkCard>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt="pokemon"
          />
        </ArtworkCard>
        <InfoCard>
          <NameCard id={id} name={name} types={types} />
          <InfoCardBottomRow>
            <StatTable>
              <Table className="Table" size="small">
                <TableBody className="Body">
                  {mapStatTableRows(stats)}
                </TableBody>
              </Table>
            </StatTable>
            <StatGraph stats={stats} types={types} />
          </InfoCardBottomRow>
        </InfoCard>
      </TopRow>

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
