import { Paper } from "@mui/material";
import { PrimaryInfoWrapper } from "./PokeDetails.styles";
import { useFetch } from "../../util";
import AblitiyTable from "../AbilityTable/AbilityTable";
import AboutAccordian from "../AboutAccordian";
import MovesAccordian from "../MovesAccordian/MovesAccordian";
import EvolutionTable from "../EvolutionTable";
import IdentificationPlate from "../IdentificationPlate";
import StatRadarChart from "../StatRadarChart";
import StatTable from "../StatTable";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types, stats, abilities, species, moves } = result;

  const speciesRes = useFetch(species.url);

  const evoChainUrl =
    speciesRes.apiData === null ? "" : speciesRes.apiData.evolution_chain.url;

  return id ? (
    <Paper className="PokeDetails">
      <IdentificationPlate id={id} name={name} types={types} />
      <PrimaryInfoWrapper>
        <StatRadarChart stats={stats} types={types} />
        <StatTable stats={stats} />
        <div>
          <EvolutionTable evoChainUrl={evoChainUrl} />
          <AblitiyTable abilities={abilities} />
        </div>
      </PrimaryInfoWrapper>
      <MovesAccordian moves={moves} types={types} />
      <AboutAccordian speciesRes={speciesRes} />
    </Paper>
  ) : null;
};

export default PokeDetails;
