import {
  PokemonDetailsPaper,
  LgRowWrapper,
  StatWrapper,
  PrimaryInfoColumn,
  SupplementalInfoColumn,
} from ".";
import { useFetch } from "../../util";
import AblitiyTable from "../AbilityTable/AbilityTable";
import EvolutionTable from "../EvolutionTable";
import IdentificationPlate from "../IdentificationPlate";
import StatRadarChart from "../StatRadarChart";
import StatTable from "../StatTable";
import MovesTable from "../MovesTable";
import FlavorTextTable from "../FlavorTextTable";
import SexRatioStatBar from "../SexRatioStatBar";

const PokeDetails = ({ result, setUrl, addToTeam }) => {
  const { id, name, types, stats, abilities, species, moves } = result;
  const speciesRes = useFetch(species.url);
  const { isLoading, serverError, apiData } = speciesRes;

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
        {isLoading && <span>Loading...</span>}
        <SupplementalInfoColumn>
          {!isLoading && serverError ? (
            <span>Error in fetching data</span>
          ) : apiData !== null ? (
            <>
              <EvolutionTable evoChainUrl={evoChainUrl} setUrl={setUrl} />
              <SexRatioStatBar genderRate={apiData.gender_rate} />
              <AblitiyTable abilities={abilities} />
              <FlavorTextTable speciesRes={speciesRes} />
            </>
          ) : (
            <></>
          )}
        </SupplementalInfoColumn>
      </LgRowWrapper>
    </PokemonDetailsPaper>
  ) : null;
};

export default PokeDetails;
