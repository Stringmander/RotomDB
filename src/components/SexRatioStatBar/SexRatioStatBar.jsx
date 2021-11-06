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
  const femalePercentage = genderRate !== -1 ? (genderRate / 8) * 100 : null;
  console.log(femalePercentage);
  const malePercentage = genderRate !== -1 ? 100 - femalePercentage : null;
  console.log(malePercentage);
  const isSexless = genderRate === -1;

  return isSexless ? (
    <Typography> Sex unknown </Typography>
  ) : (
    <SexRatioStatBarWrapper>
      <SexRatioProgressWrapper>
        <SexRatioLinearProgress variant="determinate" value={malePercentage} />
      </SexRatioProgressWrapper>
      <SexRatioTypographyWrapper>
        <SexRatioTypography sex="male">
          male: {malePercentage}%
        </SexRatioTypography>
        <SexRatioTypography sx={{ mx: 1 }}>|</SexRatioTypography>
        <SexRatioTypography sex="female">
          female: {femalePercentage}%
        </SexRatioTypography>
      </SexRatioTypographyWrapper>
    </SexRatioStatBarWrapper>
  );
};

export default SexRatioStatBar;
