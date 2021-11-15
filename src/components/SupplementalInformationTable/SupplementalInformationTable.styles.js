import { styled, Toolbar, toolbarClasses } from "@mui/material";

export const SupplementalInformationTableWrapper = styled("div")(
  ({ theme }) => ({
    width: "30%",
    display: "flex",
    flexDirection: "column",
  })
);

export const OfficialArtwork = styled("img")(({ theme }) => ({
  width: "75%",
  margin: `${theme.spacing(2)} auto`,
}));

export const TitleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#000",
  color: "#fff",

  [`&.${toolbarClasses.root}`]: {
    minHeight: "fit-content",
  },
}));
