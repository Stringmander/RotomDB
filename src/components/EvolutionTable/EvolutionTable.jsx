import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

import { EvoTable, EvoCard, EvoArrow } from "./EvolutionTable.styles";
import { capitalCase, queryApi } from "../../util";

const EvolutionTable = ({ species }) => {
  const [evoChain, setEvoChain] = useState({});
  const { evolution_chain } = species;

  let massagedEvoChain = [];

  const massageEvoChain = async (obj) => {
    const massage = async (obj) => {
      for (const property in obj) {
        if (typeof obj[property] == "object" && obj[property] !== null) {
          massageEvoChain(obj[property]);
        } else {
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

  return evoChain !== [] && massagedEvoChain.length > 1 ? (
    <EvoTable className="EvoTable">{mappedEvoChain}</EvoTable>
  ) : null;
};

export default EvolutionTable;
