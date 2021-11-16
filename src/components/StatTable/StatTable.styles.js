import { styled, TableCell, TableContainer } from "@mui/material";

export const StatTableContainer = styled(TableContainer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "12%",
    height: "100%",
  },
}));

export const StatTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
}));
