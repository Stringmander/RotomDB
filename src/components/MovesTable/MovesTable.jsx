import { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { LanguageContext } from "../../context";
import PokeballSpinner from "../PokeballSpinner";
import {
  capitalCase,
  mapPokeTypeName,
  useContextFilter,
  useMappedFetch,
} from "../../util";
import { CustomFooterWrapper, MovesTableWrapper, useStyles } from ".";
import {
  TablePagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const MovesTable = ({ moves, pokeTypes }) => {
  const pokeTypesArr = mapPokeTypeName(pokeTypes);
  const lang = useContext(LanguageContext);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredMoves = useContextFilter(moves);

  const determineSTAB = (moveType, moveClass) => {
    const hasSTAB =
      (moveClass === "physical" || moveClass === "special") &&
      pokeTypesArr.includes(moveType);
    return hasSTAB;
  };

  const { isLoading, apiData, serverError } = useMappedFetch(
    filteredMoves,
    "move"
  );

  const customFooter = () => {
    return (
      <CustomFooterWrapper>
        <Typography>*bold indicates move has STAB</Typography>
        <TablePagination />
      </CustomFooterWrapper>
    );
  };

  const rows =
    apiData !== null
      ? apiData.map((move, i) => Object.assign(move, { id: i + 1 }))
      : [];

  const columns = [
    {
      field: "name",
      headerName: "Name",
      valueGetter: (params) =>
        capitalCase(
          params.row.names.find(({ language }) => language.name === lang.name)
            .name
        ),
      cellClassName: (params) =>
        determineSTAB(params.row.type.name, params.row.damage_class.name)
          ? "stab-move"
          : "",
      flex: matches ? 0 : 1,
    },
    {
      field: "type",
      headerName: "Type",
      valueGetter: (params) => capitalCase(params.row.type.name),
      cellClassName: (params) => `${params.row.type.name}-type-cell`,
      flex: matches ? 0 : 1,
    },
    {
      field: "damage_class",
      headerName: "Class",
      valueGetter: (params) => capitalCase(params.row.damage_class.name),
      flex: matches ? 0 : 1,
    },
    {
      field: "power",
      headerName: "Power",
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "accuracy",
      headerName: "Accuracy",
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "pp",
      headerName: "PP",
      type: "number",
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <MovesTableWrapper className={classes.root}>
      {isLoading && <PokeballSpinner />}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : !isLoading && rows !== [] ? (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // components={{
          //   Footer: customFooter,
          // }}
        />
      ) : (
        <></>
      )}
    </MovesTableWrapper>
  );
};

export default MovesTable;
