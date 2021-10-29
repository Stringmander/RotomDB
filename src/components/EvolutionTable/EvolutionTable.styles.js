import { styled, Card, Typography, Paper } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const EvoTableWrapper = styled("div")({
  maxWidth: "100%",
  display: "flex",
});

export const EvoStepWrapper = styled("div")({
  display: "flex",
});

export const EvoTablePaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
});

export const EvoTableSprite = styled("img")(({ theme }) => ({
  width: "6rem",
  [theme.breakpoints.down("md")]: {
    width: "5rem",
  },
}));

export const EvoTableTypogragphy = styled(Typography)({
  color: "white",
  backgroundColor: "black",
});

export const EvoTableArrow = styled(DoubleArrowIcon)(({ theme }) => ({
  // fontSize: "3rem",
  margin: "auto 5px",
}));
