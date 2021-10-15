import { Paper, Table, TableBody, TableRow } from "@material-ui/core";
import {
  TopRow,
  InfoCard,
  StatTable,
  LabelCell,
  StatTableCell,
} from "./PokeDetails.styles";
import { capitalCase, massageStats, useFetch } from "../../util";
import StatGraph from "../StatGraph";
import AblitiyTable from "../AbilityTable/AbilityTable";
import AboutAccordian from "../AboutAccordian";
import MovesAccordian from "../MovesAccordian/MovesAccordian";
import EvolutionTable from "../EvolutionTable";
import IdentificationPlate from "../IdentificationPlate";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types, stats, abilities, species, moves } = result;

  const speciesRes = useFetch(species.url);

  const evoChainUrl =
    speciesRes.apiData === null ? "" : speciesRes.apiData.evolution_chain.url;

  const mapStatTableRows = (stats) => {
    const massagedStats = massageStats(stats);
    const keys = Object.keys(massagedStats);
    const values = Object.values(massagedStats);

    return keys.map((label, baseStat) => {
      return (
        <TableRow className="Row" key={label}>
          <StatTableCell align="left">{values[baseStat]}</StatTableCell>
          <LabelCell align="left">{capitalCase(label)}</LabelCell>
        </TableRow>
      );
    });
  };

  return id ? (
    <Paper elevation={0} className="PokeDetails">
      <InfoCard>
        <IdentificationPlate id={id} name={name} types={types} />
        <TopRow>
          <StatGraph stats={stats} types={types} />
          <StatTable>
            <Table className="Table" size="small">
              <TableBody className="Body">{mapStatTableRows(stats)}</TableBody>
            </Table>
          </StatTable>
          <div>
            <EvolutionTable evoChainUrl={evoChainUrl} />
            <AblitiyTable abilities={abilities} />
          </div>
        </TopRow>
        <MovesAccordian moves={moves} types={types} />
        <AboutAccordian speciesRes={speciesRes} />
      </InfoCard>
    </Paper>
  ) : null;
};

export default PokeDetails;
