import styled from "styled-components";
import NameCard from "../NameCard";
import { mapPokeTypeName } from "../../util";
import StatGraph from "../StatGraph";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types } = result;

  const pokeTypes = types ? mapPokeTypeName(types) : [];

  const TopRow = styled.div`
    display: flex;
    width: 100%;
  `

  const ArtworkCard = styled.div`
    width: 25rem;
    padding: 5px;
    margin: 5px;
    > img {
      width: 100%;
    }
  `;

  return id ? (
    <div className="PokeDetails">
      <TopRow>
      <ArtworkCard>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon"
        />
      </ArtworkCard>
      <NameCard id={id} name={name} types={pokeTypes} />
      </TopRow>
      <StatGraph types={types} stats={result.stats} />
      
      <button onClick={()=>{addToTeam(result)}}> add to team </button>
    </div>
  ) : null;
};

export default PokeDetails;
