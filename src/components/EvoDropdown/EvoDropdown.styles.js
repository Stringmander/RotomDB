import styled from "styled-components";

import { typeColor } from "../../themes";

export const TypeCell = styled.td`
  color: white;
  background-color: ${({ type }) => typeColor[type]};
`;
