import { styled, TableContainer } from "@mui/material";

export const StatTableContainer = styled(TableContainer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "18%",
    height: "100%",
  },
}));
