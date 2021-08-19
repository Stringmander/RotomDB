import styled from "styled-components";
import { DoubleArrow } from "@material-ui/icons";

export const EvoTable = styled.div`
  display: flex;
  max-width: fit-content;
  margin: 5px;
`;

export const EvoCard = styled.div`
  padding: 5px;
`;

export const EvoArrow = styled(DoubleArrow)`
  && {
    font-size: 3rem;
    margin: auto 5px;
  }
`;
