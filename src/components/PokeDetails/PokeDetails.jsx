import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableRow,
  Typography,
} from "@material-ui/core";
import {
  TopRow,
  InfoCard,
  // InfoCardBottomRow,
  StatTable,
  LabelCell,
  StatTableCell,
} from "./PokeDetails.styles";
import { capitalCase, massageStats } from "../../util";
import NameCard from "../NameCard";
import StatGraph from "../StatGraph";
import AblitiyTable from "../AbilityTable/AbilityTable";
import { ExpandMore } from "@material-ui/icons";
import MovesTable from "../MovesTable";
import AboutAccordian from "../AboutAccordian";

const PokeDetails = ({ result, speciesData, addToTeam }) => {
  const { id, name, types, stats, abilities, species, moves } = result;

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

  const MovesAccordian = () => {
    return (
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="moves-panel-content"
          id="moves-panel-header"
        >
          <Typography>Moves</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MovesTable moves={moves} pokeTypes={types} />
        </AccordionDetails>
      </Accordion>
    );
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
          {/* <AblitiyTable abilities={abilities} /> */}
        </TopRow>
        {/* <MovesTable moves={moves} pokeTypes={types} /> */}
        <MovesAccordian />
        {/* <AboutAccordian species={speciesData} /> */}
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
