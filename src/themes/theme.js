import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  components: {
    MuiToolbar: {
      variants: [
        {
          props: { variant: "table-heading" },
          style: {
            width: "100%",
            minHeight: "fit-content",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#000",
            color: "#fff",
          },
        },
      ],
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: "supplemental-body" },
          style: {
            padding: 8,
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "tooltip" },
          style: {
            textDecoration: "underline",
            cursor: "pointer",
          },
        },
      ],
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
