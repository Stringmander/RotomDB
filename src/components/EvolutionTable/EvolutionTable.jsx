import { useState, useMemo } from "react";
import { capitalCase, useFetch } from "../../util";
import {
  EvoTableWrapper,
  EvoCardWrapper,
  EvoTableArrow,
  EvoTableCard,
  EvoTableTypogragphy,
} from ".";

const EvolutionTable = ({ evoChainUrl, setUrl }) => {
  const [evoChain, setEvoChain] = useState([]);

  const { isLoading, serverError, apiData } = useFetch(evoChainUrl);

  const handleClick = (e, id) => {
    e.preventDefault();
    setUrl(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };

  useMemo(() => {
    const evoChainObj = apiData === null ? {} : apiData.chain;

    let massagedEvoChain = [];

    const massageEvoChainObj = (obj) => {
      for (const prop in obj) {
        if (typeof obj[prop] == "object" && obj[prop] !== null) {
          massageEvoChainObj(obj[prop]);
        } else {
          if (!obj.hasOwnProperty(prop)) continue;
          if (obj.species) {
            const URLParameters = obj.species.url.split("/");
            const id = URLParameters[URLParameters.length - 2];
            massagedEvoChain.push({
              id: id,
              name: obj.species.name,
            });
          }
        }
      }
    };

    massageEvoChainObj(evoChainObj);
    massagedEvoChain.reverse();

    setEvoChain(massagedEvoChain);
  }, [apiData]);

  const EvoChainCards = () => {
    return evoChain.map(({ id, name }, i) => {
      return (
        <EvoCardWrapper key={name + id}>
          <EvoTableCard
            onClick={(e) => {
              handleClick(e, evoChain[i].id);
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt="pokemon"
            />
            <EvoTableTypogragphy align="center">
              {capitalCase(name)}
            </EvoTableTypogragphy>
          </EvoTableCard>
          <EvoTableArrow
            style={
              i === evoChain.length - 1
                ? { display: "none" }
                : { display: "block" }
            }
          />
        </EvoCardWrapper>
      );
    });
  };

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : apiData !== null ? (
        <EvoTableWrapper>
          <EvoChainCards />
        </EvoTableWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default EvolutionTable;
