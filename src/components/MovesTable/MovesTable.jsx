import { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { LanguageContext } from "../../context";
import {
  capitalCase,
  mapPokeTypeName,
  useContextFilter,
  useMappedFetch,
} from "../../util";
import { MovesTableWrapper, useStyles } from ".";
import { useMediaQuery, useTheme } from "@mui/material";

const MovesTable = ({ moves, pokeTypes }) => {
  const pokeTypesArr = mapPokeTypeName(pokeTypes);
  const lang = useContext(LanguageContext);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // const determineSTAB = (moveType, moveClass) => {
  //   const StabTextStyle = pokeTypesArr.includes(moveType.name)
  //     ? moveClass.name === "physical" || moveClass.name === "special"
  //       ? { fontWeight: "bold" }
  //       : {}
  //     : {};
  //   return StabTextStyle;
  // };

  const filteredMoves = useContextFilter(moves);

  const { isLoading, apiData, serverError } = useMappedFetch(
    filteredMoves,
    "move"
  );

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
      width: 120,
    },
    {
      field: "type",
      headerName: "Type",
      valueGetter: (params) => capitalCase(params.row.type.name),
      cellClassName: (params) => `${params.row.type.name}-type-cell`,
    },
    {
      field: "damage_class",
      headerName: "Class",
      valueGetter: (params) => capitalCase(params.row.damage_class.name),
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
      width: 80,
    },
  ];

  return (
    <MovesTableWrapper className={classes.root}>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : rows !== [] ? (
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={true}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      ) : (
        <></>
      )}
    </MovesTableWrapper>
  );
};

export default MovesTable;
