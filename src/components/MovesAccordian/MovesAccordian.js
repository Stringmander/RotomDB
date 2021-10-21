import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MovesTable from "../MovesTable";

const MovesAccordian = ({ moves, types }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
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
