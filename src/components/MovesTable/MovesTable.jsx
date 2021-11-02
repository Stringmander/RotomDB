import { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { LanguageContext } from "../../context";
import {
  capitalCase,
  mapPokeTypeName,
  useContextFilter,
  useMappedFetch,
} from "../../util";
import { MovesTableContainer, useStyles } from ".";

const MovesTable = ({ moves, pokeTypes }) => {
  const pokeTypesArr = mapPokeTypeName(pokeTypes);
  const lang = useContext(LanguageContext);
  const classes = useStyles();

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
      width: 200,
    },
    {
      field: "type",
      headerName: "Type",
      valueGetter: (params) => capitalCase(params.row.type.name),
      cellClassName: (params) => `${params.row.type.name}-type-cell`,
      width: 125,
    },
    {
      field: "damage_class",
      headerName: "Class",
      valueGetter: (params) => capitalCase(params.row.damage_class.name),
      width: 125,
    },
    { field: "power", headerName: "Power", type: "number", align: "center" },
    {
      field: "accuracy",
      headerName: "Accuracy",
      type: "number",
      align: "center",
    },
    { field: "pp", headerName: "PP", type: "number", align: "center" },
  ];

  return (
    <MovesTableContainer className={classes.root}>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : rows !== [] ? (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      ) : (
        <></>
      )}
    </MovesTableContainer>
  );
};

export default MovesTable;
