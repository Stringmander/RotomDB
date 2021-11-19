import {
  PokemonDetailsPaper,
  LgRowWrapper,
  StatWrapper,
  PrimaryInfoColumn,
  // SupplementalInfoColumn,
} from ".";
import { useFetch } from "../../util";
import IdentificationPlate from "../IdentificationPlate";
import StatRadarChart from "../StatRadarChart";
import StatTable from "../StatTable";
import MovesTable from "../MovesTable";
import SupplementalInformationTable from "../SupplementalInformationTable";
import PokeballSpinner from "../PokeballSpinner";
import { useState } from "react";
import { useEffect } from "react";

const PokeDetails = ({ result, setUrl, addToTeam }) => {
  const { id, name, types, stats, abilities, species, moves } = result;
  const [speciesUrl, setSpeciesUrl] = useState("");

  useEffect(() => {
    species ? setSpeciesUrl(species.url) : setSpeciesUrl("");
  }, [species]);

  const { isLoading, serverError, apiData } = useFetch(speciesUrl);

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
        {isLoading && <PokeballSpinner />}
        {!isLoading && serverError ? (
          <span>Error in fetching data</span>
        ) : apiData !== null ? (
          // <>
          //   <EvolutionTable
          //     evoChainUrl={speciesResult.apiData.evolution_chain.url}
          //     setUrl={setUrl}
          //   />
          //   <SexRatioStatBar genderRate={apiData.gender_rate} />
          //   <AblitiyTable abilities={abilities} />
          //   <FlavorTextTable speciesRes={speciesResult} />
          // </>
          <SupplementalInformationTable
            setUrl={setUrl}
            speciesResult={apiData}
            id={id}
            pokemonTypes={types}
            abilities={abilities}
          />
        ) : (
          <></>
        )}
      </LgRowWrapper>
    </PokemonDetailsPaper>
  ) : null;
};

export default PokeDetails;
