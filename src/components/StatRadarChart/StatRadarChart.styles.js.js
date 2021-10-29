import { styled } from "@mui/material";

export const ChartWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexGrow: "1",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 0",
  },
}));
