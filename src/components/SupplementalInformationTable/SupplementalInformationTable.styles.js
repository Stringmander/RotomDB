import {
  styled,
  TableCell,
  Toolbar,
  toolbarClasses,
  tableCellClasses,
} from "@mui/material";

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

export const HeadingToolbar = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#000",
  color: "#fff",
  [`&.${toolbarClasses.root}`]: {
    minHeight: "fit-content",
  },
}));

export const TableHeadCell = styled(TableCell)(({ theme }) => ({
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
