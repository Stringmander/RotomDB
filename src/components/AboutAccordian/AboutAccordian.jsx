import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import EvolutionTable from "../EvolutionTable/EvolutionTable";
import useVersionFilter from "../../util/useVersionFilter";
import { capitalCase } from "../../util";

const AboutAccordian = ({ species }) => {
  const flavorTextArr = species.flavor_text_entries;

  const filteredFlavorText = useVersionFilter(flavorTextArr);

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
        <div>
          {filteredFlavorText.map((element) => {
            return (
              <div key={`${element.version.name}-${element.language.name}`}>
                <h3>Pokémon {capitalCase(element.version.name)}</h3>
                <p>{element.flavor_text}</p>
              </div>
            );
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AboutAccordian;
