// import styled from "styled-components";
import { Paper, TableContainer, TableCell, styled } from "@mui/material";

export const PrimaryInfoWrapper = styled("div")({
  display: "flex",
  width: "100%",
});

// export const InfoCard = styled(Paper)`
//   margin: 0 0.3rem;
//   width: 100%;

//   > .NameCard {
//     border-bottom-left-radius: 0;
//     border-bottom-right-radius: 0;
//     box-shadow: none;
//   }
// `;

export const ArtworkCard = styled(Paper)`
  width: 25rem;
  height: max-content;
  padding: 5px;
  margin: 0 0.3rem;
  > img {
    width: 100%;
  }
`;

export const StatTable = styled(TableContainer)`
  && {
    width: fit-content;
    > .Table {
      height: 100%;
      width: 11rem;
      > .Body {
        > .Row {
          &:last-child {
            > * {
              border: none;
            }
          }
        }
      }
    }
  }
`;

export const StatTableCell = styled(TableCell)`
  && {
    padding: 0.5rem;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const LabelCell = styled(StatTableCell)`
  background-color: #c4c4c4;
`;
