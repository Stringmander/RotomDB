import { Card } from "@material-ui/core";
import styled from "styled-components";
import NameCard from "../NameCard";
import StatGraph from "../StatGraph";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types, stats } = result;

  const TopRow = styled.div`
    display: flex;
    width: 100%;
    height: 19rem;
  `;

  const ArtworkCard = styled(Card)`
    width: 25rem;
    height: max-content;
    padding: 5px;
    margin: 0 0.3rem;
    > img {
      width: 100%;
    }
  `;

  const InfoCard = styled(Card)`
    margin: 0 0.3rem;
    width: 100%;

    > .NameCard {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: none;
    }
  `;

  const InfoCardBottomRow = styled.div`
    width: auto;
    height: 16rem;
    display: flex;

    > .StatGraph {
      /* width: fit-content; */
      height: 100%;
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
        <InfoCard>
          <NameCard id={id} name={name} types={types} />
          <InfoCardBottomRow>
            <StatGraph stats={stats} types={types} />
          </InfoCardBottomRow>
        </InfoCard>
      </TopRow>

      <button
        onClick={() => {
          addToTeam(result);
        }}
      >
        {" "}
        add to team{" "}
      </button>
    </div>
  ) : null;
};

export default PokeDetails;
