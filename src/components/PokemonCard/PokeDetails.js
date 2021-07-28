import styled from "styled-components";

const Artwork = styled.img`
  width: 25rem;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: white;
`;

const PokemonDetails = ({ result }) => {
  const { id, name, types, abilities, stats } = result;

  return name ? (
    <div>
      <Artwork
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      />
    </div>
  ) : null;
};

export default PokemonDetails;
