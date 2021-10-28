import { styled, Card, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const EvoTableWrapper = styled("div")({
  display: "flex",
  maxWidth: "fit-content",
  margin: "5px",
});

export const EvoCardWrapper = styled("div")({
  display: "flex",
});

export const EvoTableCard = styled(Card)({
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
});

export const EvoTableTypogragphy = styled(Typography)({
  color: "white",
  backgroundColor: "black",
});

export const EvoTableArrow = styled(DoubleArrowIcon)({
  fontSize: "3rem",
  margin: "auto 5px",
});
