import {
  EvolutionAndAbilitiesWrapper,
  PokemonDetailsPaper,
  PrimaryInfoWrapper,
} from ".";
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
    <PokemonDetailsPaper className="PokeDetails">
      <IdentificationPlate id={id} name={name} types={types} />
      <PrimaryInfoWrapper>
        <StatRadarChart stats={stats} types={types} />
        <StatTable stats={stats} />
        <EvolutionAndAbilitiesWrapper>
          <EvolutionTable evoChainUrl={evoChainUrl} />
          <AblitiyTable abilities={abilities} />
        </EvolutionAndAbilitiesWrapper>
      </PrimaryInfoWrapper>
      <MovesAccordian moves={moves} types={types} />
      <AboutAccordian speciesRes={speciesRes} />
    </PokemonDetailsPaper>
  ) : null;
};

export default PokeDetails;
