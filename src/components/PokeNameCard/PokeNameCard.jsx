import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { CapitalCase } from "../../util";

const NameCard = styled(Card)`
  width: 500px;
  height: 4.5rem;
  display: flex;
  /* align-items: center; */
  background-color: black;
`;

const SpriteIdBg = styled.div`
  position: relative;
  z-index: 0;
  width: 50%;
  background-color: #61c65b;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
`;

const IdTypography = styled(Typography)`
  margin-left: 12px;
  color: white;
`;

const Name = styled(IdTypography)`
  padding-left: 12px;
  margin: auto 0;
`;

const SpriteImgContainer = styled.span`
  position: absolute;
  height: 4.5rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    padding: 8px;
  }
`;

const TypographyVariant = "h5";

const PokeNameCard = ({ id, name }) => {
  const capitilizedName = CapitalCase(name);
  return (
    <NameCard>
      <SpriteIdBg />
      <SpriteImgContainer>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
          alt="pokemon"
        />
        <IdTypography variant={TypographyVariant}>No. {id}</IdTypography>
      </SpriteImgContainer>
      <Name variant={TypographyVariant}>{capitilizedName}</Name>
    </NameCard>
  );
};

export default PokeNameCard;
