import { Typography } from "@material-ui/core";
import { useState, useMemo } from "react";

import { EvoTable, EvoCard, EvoArrow } from "./EvolutionTable.styles";
import { capitalCase, useFetch } from "../../util";

const EvolutionTable = ({ evoChainUrl }) => {
  const [evoChain, setEvoChain] = useState([]);

  const { isLoading, serverError, apiData } = useFetch(evoChainUrl);

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

  const mapEvoChain = evoChain.map(({ id, name }, i) => (
    <div key={name + i} style={{ display: "flex" }}>
      <EvoCard>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="pokemon"
        />
        <Typography align="center">{capitalCase(name)}</Typography>
      </EvoCard>
      <EvoArrow
        className="EvoTable"
        style={
          i === evoChain.length - 1
            ? { display: "none" }
            : { display: "inline-block" }
        }
      />
    </div>
  ));

  return (
    <EvoTable>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : apiData !== null ? (
        mapEvoChain
      ) : (
        <></>
      )}
    </EvoTable>
  );
};

export default EvolutionTable;
