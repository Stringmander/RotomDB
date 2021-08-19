import styled from "styled-components";
import { DoubleArrow } from "@material-ui/icons";
import { Card } from "@material-ui/core";

export const EvoTable = styled.div`
  display: flex;
  max-width: fit-content;
  margin: 5px;
`;

export const EvoCard = styled(Card)`
  border-radius: 5px;
  & p {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    background-color: black;
  }
`;

export const EvoArrow = styled(DoubleArrow)`
  && {
    font-size: 3rem;
    margin: auto 5px;
  }
`;
