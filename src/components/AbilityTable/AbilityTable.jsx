import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { queryApi, capitalCase } from "../../util";

const AblitiyTable = ({ abilities }) => {
  const [abilityData, setAbilityData] = useState([]);

  // useEffect(() => {
  //   const fetchAblities = async (abilities) => {
  //     const abilityEndpoints = abilities.map(({ ability }) => ability.url);
  //     const abilityPromises = [];

  //     abilityEndpoints.map((endpoint) => {
  //       return abilityPromises.push(queryApi(endpoint));
  //     });
  //     return Promise.all(abilityPromises).then((res) => setAbilityData(res));
  //   };

  //   fetchAblities(abilities);
  // }, [abilities]);

  // const abilityRows = abilityData.map((ability, i) => {
  //   const effectText = filterLanguage(ability.effect_entries, "effect", "en");

  //   return (
  //     <TableRow key={ability.name + i}>
  //       <TableCell>{capitalCase(ability.name)}</TableCell>
  //       <TableCell>{effectText}</TableCell>
  //     </TableRow>
  //   );
  // });

  return (
    <TableContainer>
      <Table>{/* <TableBody>{abilityRows}</TableBody> */}</Table>
    </TableContainer>
  );
};

export default AblitiyTable;
