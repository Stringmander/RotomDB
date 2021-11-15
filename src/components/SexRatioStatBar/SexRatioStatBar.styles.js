import {
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";

export const SexRatioStatBarWrapper = styled("div")({
  width: "100%",
});

export const SexRatioProgressWrapper = styled("div")(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}`,
  margin: `${theme.spacing(1)} 0`,
}));

export const SexRatioLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.determinate}`]: {
    backgroundColor: "#ff77dd",
  },
  [`&.${linearProgressClasses.bar}`]: {
    backgroundColor: "#3355ff",
  },
}));

export const SexRatioTypographyWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const SexRatioTypography = styled(Typography)(({ sex }) => ({
  display: "inline",
  color: sex === "male" ? "#3355ff" : sex === "female" ? "#ff77dd" : "#000",
}));
