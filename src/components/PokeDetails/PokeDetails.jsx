import { Table, TableBody, TableRow } from "@material-ui/core";
import {
  TopRow,
  InfoCard,
  // InfoCardBottomRow,
  StatTable,
  LabelCell,
  StatTableCell,
} from "./PokeDetails.styles";
import { capitalCase, massageStats, useFetch } from "../../util";
import NameCard from "../NameCard";
import StatGraph from "../StatGraph";
import AblitiyTable from "../AbilityTable/AbilityTable";
import AboutAccordian from "../AboutAccordian";
import MovesAccordian from "../MovesAccordian/MovesAccordian";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types, stats, abilities, species, moves } = result;

  const { isLoading, serverError, apiData } = useFetch(species.url);

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
    <div className="PokeDetails">
      <InfoCard>
        <NameCard id={id} name={name} types={types} />
        <TopRow>
          <StatGraph stats={stats} types={types} />
          <StatTable>
            <Table className="Table" size="small">
              <TableBody className="Body">{mapStatTableRows(stats)}</TableBody>
            </Table>
          </StatTable>
          <AblitiyTable abilities={abilities} />
        </TopRow>
        <MovesAccordian moves={moves} types={types} />
        {isLoading && <span>Loading...</span>}
        {!isLoading && serverError ? (
          (console.log(serverError), (<span>Error in fetching data</span>))
        ) : apiData !== null ? (
          <AboutAccordian speciesUrl={apiData} />
        ) : (
          <></>
        )}
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
