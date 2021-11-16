import { Typography } from "@mui/material";
import {
  SexRatioLinearProgress,
  SexRatioStatBarWrapper,
  SexRatioTypographyWrapper,
} from ".";
import {
  SexRatioProgressWrapper,
  SexRatioTypography,
} from "./SexRatioStatBar.styles";

const SexRatioStatBar = ({ genderRate }) => {
  const isSexless = genderRate === -1;
  const femalePercentage = !isSexless ? (genderRate / 8) * 100 : null;
  const malePercentage = !isSexless ? 100 - femalePercentage : null;
  const labelTypographyVariant = "caption";

  return isSexless ? (
    <Typography align="center"> unknown sex </Typography>
  ) : (
    <SexRatioStatBarWrapper>
      <SexRatioProgressWrapper>
        <SexRatioLinearProgress variant="determinate" value={malePercentage} />
      </SexRatioProgressWrapper>
      <SexRatioTypographyWrapper>
        <SexRatioTypography variant={labelTypographyVariant} sex="male">
          male: {malePercentage}%
        </SexRatioTypography>
        <SexRatioTypography variant={labelTypographyVariant} sx={{ mx: 1 }}>
          |
        </SexRatioTypography>
        <SexRatioTypography variant={labelTypographyVariant} sex="female">
          female: {femalePercentage}%
        </SexRatioTypography>
      </SexRatioTypographyWrapper>
    </SexRatioStatBarWrapper>
  );
};

export default SexRatioStatBar;
