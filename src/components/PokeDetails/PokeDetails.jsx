import {
  EvolutionAndAbilitiesWrapper,
  PokemonDetailsPaper,
  LgRowWrapper,
  StatWrapper,
  PrimaryInfoColumn,
  AuxiliaryInfoColumn,
} from ".";
import { useFetch } from "../../util";
import AblitiyTable from "../AbilityTable/AbilityTable";
import EvolutionTable from "../EvolutionTable";
import IdentificationPlate from "../IdentificationPlate";
import StatRadarChart from "../StatRadarChart";
import StatTable from "../StatTable";
import MovesTable from "../MovesTable";
import FlavorTextTable from "../FlavorTextTable";

const PokeDetails = ({ result, setUrl, addToTeam }) => {
  const { id, name, types, stats, abilities, species, moves } = result;
  const speciesRes = useFetch(species.url);

  const evoChainUrl =
    speciesRes.apiData === null ? "" : speciesRes.apiData.evolution_chain.url;

  return id ? (
    <PokemonDetailsPaper className="PokeDetails">
      <IdentificationPlate id={id} name={name} types={types} />
      <LgRowWrapper>
        <PrimaryInfoColumn>
          <StatWrapper>
            <StatRadarChart stats={stats} types={types} />
            <StatTable stats={stats} />
          </StatWrapper>
          <MovesTable moves={moves} pokeTypes={types} />
        </PrimaryInfoColumn>
        <AuxiliaryInfoColumn>
          <EvolutionAndAbilitiesWrapper>
            <EvolutionTable evoChainUrl={evoChainUrl} setUrl={setUrl} />
            <AblitiyTable abilities={abilities} />
          </EvolutionAndAbilitiesWrapper>
          <FlavorTextTable speciesRes={speciesRes} />
        </AuxiliaryInfoColumn>
      </LgRowWrapper>
    </PokemonDetailsPaper>
  ) : null;
};

export default PokeDetails;
