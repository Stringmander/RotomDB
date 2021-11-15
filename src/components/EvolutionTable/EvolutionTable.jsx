import { useState, useMemo } from "react";
import { capitalCase, useFetch } from "../../util";
import {
  EvoTableWrapper,
  EvoStepWrapper,
  EvoTableArrow,
  EvoTableTypogragphy,
  EvoTablePaper,
} from ".";
import PokeballSpinner from "../PokeballSpinner";

const EvolutionTable = ({ evolutionChainUrl, setUrl }) => {
  const [evoChain, setEvoChain] = useState([]);

  const { isLoading, serverError, apiData } = useFetch(evolutionChainUrl);

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

  const EvoTableCard = ({ id, name, index }) => {
    return (
      <EvoTablePaper
        onClick={(e) => {
          handleClick(e, evoChain[index].id);
        }}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={"/img/missingno-sprite.png"}
        />
        <EvoTableTypogragphy variant="body2" align="center">
          {capitalCase(name)}
        </EvoTableTypogragphy>
      </EvoTablePaper>
    );
  };

  const EvoChainCards = () => {
    return evoChain.map(({ id, name }, i) => {
      return evoChain.length - 1 !== i ? (
        <EvoStepWrapper key={name + id}>
          <EvoTableCard id={id} name={name} index={i} />
          <EvoTableArrow fontSize="large" />
        </EvoStepWrapper>
      ) : (
        <EvoTableCard id={id} name={name} index={i} key={name + id} />
      );
    });
  };

  return (
    <>
      {isLoading && <PokeballSpinner />}
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
