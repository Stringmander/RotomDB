import { styled, TableCell, tableCellClasses } from "@mui/material";

export const SupplementalInformationTableWrapper = styled("div")(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  })
);

export const OfficialArtwork = styled("img")(({ theme }) => ({
  width: "69%",
  margin: "auto",
}));

export const SupplementalHeadingCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",

  [`&.${tableCellClasses.root}`]: {
    minHeight: "fit-content",
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export const TableBodyCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    padding: theme.spacing(1),
  },
}));

export const TooltipTypography = styled("div")(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
}));

export const TypeBadgeWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  margin: theme.spacing(1),
}));
