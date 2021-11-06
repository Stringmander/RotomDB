import { styled } from "@mui/material";

export const ChartWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  margin: `${theme.spacing(2)} 0`,
}));
