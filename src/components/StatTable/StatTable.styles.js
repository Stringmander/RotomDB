import { styled, TableContainer } from "@mui/material";

export const StatTableContainer = styled(TableContainer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "15%",
    height: "100%",
  },
}));
