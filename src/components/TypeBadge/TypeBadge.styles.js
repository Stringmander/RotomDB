import styled from "styled-components";
import { Typography } from "@material-ui/core";

import { typeColor } from "../../themes";

export const BadgeBg = styled.div`
  display: flex;
  width: 10rem;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  align-content: center;
  background-color: ${({ type }) => typeColor[type]};
  > img {
    height: 2rem;
  }
`;

export const BadgeTypography = styled(Typography)`
  && {
    color: white;
    margin: auto;
  }
`;
