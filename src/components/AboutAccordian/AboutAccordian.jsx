import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import EvolutionTable from "../EvolutionTable/EvolutionTable";

const AboutAccordian = ({ species }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="about-panel-content"
        id="about-panel-header"
      >
        <Typography>About</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <EvolutionTable speciesData={species} />
      </AccordionDetails>
    </Accordion>
  );
};

export default AboutAccordian;
