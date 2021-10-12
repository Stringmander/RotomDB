import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import MovesTable from "../MovesTable";

const MovesAccordian = ({ moves, types }) => {
  return (
    <Accordion>
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

export default MovesAccordian;
