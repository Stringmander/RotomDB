import styled from "styled-components";
import { Typography } from "@mui/material";

import { typeColor } from "../../themes";

export const BadgeBg = styled.div`
  display: flex;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  align-content: center;
  background-color: ${({ type }) => typeColor[type]};
  > img {
    width: 2em;
  }
`;

export const BadgeTypography = styled(Typography)`
  && {
    font-size: 2em;
    font-weight: bold;
    margin: auto 1em;
    color: white;
  }
`;
