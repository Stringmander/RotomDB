import styled from "styled-components";
import Card from "@material-ui/core/Card";
import PokeNameCard from "../PokeNameCard";

const PokeDetails = ({ result }) => {
  const { id, name, types } = result;

  const FlexContainer = styled.div`
    display: flex;
  `;

  const ArtworkCard = styled(Card)`
    width: 25rem;
    padding: 5px;
    margin: 5px;
    > img {
      width: 100%;
    }
  `;

  return name ? (
    <FlexContainer>
      <ArtworkCard>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon"
        />
      </ArtworkCard>
      <PokeNameCard id={id} name={name} types={types} />
    </FlexContainer>
  ) : null;
};

export default PokeDetails;
