import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { capitalCase, useContextFilter } from "../../util";

const AboutAccordian = ({ speciesRes }) => {
  const { isLoading, serverError, apiData } = speciesRes;

  const flavorTextEntries = apiData === null ? [] : apiData.flavor_text_entries;

  const flavorText = useContextFilter(flavorTextEntries);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="about-panel-content"
        id="about-panel-header"
      >
        <Typography>About</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isLoading && <span>Loading...</span>}
        {!isLoading && serverError ? (
          <span>Error in fetching data</span>
        ) : apiData !== null ? (
          <div>
            {flavorText.map((element) => {
              return (
                <div key={`${element.version.name}-${element.language.name}`}>
                  <h3>Pokémon {capitalCase(element.version.name)}</h3>
                  <p>{element.flavor_text}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default AboutAccordian;
