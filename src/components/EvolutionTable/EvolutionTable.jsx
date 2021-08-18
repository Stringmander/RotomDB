import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

import { EvoTable, EvoCard, EvoArrow } from "./EvolutionTable.styles";
import { capitalCase, queryApi } from "../../util";

const EvolutionTable = ({ speciesData }) => {
  const [evoChain, setEvoChain] = useState({});
  const { evolution_chain } = speciesData;

  let massagedEvoChain = [];

  const massageEvoChain = async (obj) => {
    const massage = async (obj) => {
      for (const property in obj) {
        if (typeof obj[property] == "object" && obj[property] !== null) {
          massageEvoChain(obj[property]);
        } else {
          if (obj.species) {
            massagedEvoChain.push({
              id: obj.species.url.charAt(42),
              name: obj.species.name,
            });
          }
        }
      }
    };

    await massage(obj);
  };

  massageEvoChain(evoChain);

  const mappedEvoChain = massagedEvoChain.reverse().map(({ id, name }, i) => (
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
          i === massagedEvoChain.length - 1
            ? { display: "none" }
            : { display: "inline-block" }
        }
      />
    </div>
  ));

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      const evoChainEndpoint = evolution_chain ? evolution_chain.url : "";
      const evoChainRes = await queryApi(evoChainEndpoint);
      setEvoChain(evoChainRes);
    };
    fetchEvolutionChain();
  }, [evolution_chain]);

  return evoChain !== [] ? (
    <EvoTable className="EvoTable">{mappedEvoChain}</EvoTable>
  ) : null;
};

export default EvolutionTable;
