import styled from "styled-components";
import Card from "@material-ui/core/Card";
import NameCard from "../NameCard";
import { mapPokeTypeName } from "../../util";

const PokeDetails = ({ result }) => {
  const { id, name, types } = result;

  const pokeTypes = types ? mapPokeTypeName(types) : [];

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

  return id ? (
    <FlexContainer>
      <ArtworkCard>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon"
        />
      </ArtworkCard>
      <NameCard id={id} name={name} types={pokeTypes} />
    </FlexContainer>
  ) : null;
};

export default PokeDetails;
