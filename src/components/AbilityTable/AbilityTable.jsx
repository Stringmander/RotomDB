import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { queryApi } from "../../util";

const AblitiyTable = ({ abilities }) => {
  const [abilityData, setAbilityData] = useState([]);

  useEffect(() => {
    const fetchAblities = async (abilities) => {
      const abilityEndpoints = abilities.map(({ ability }) => ability.url);
      const abilityPromises = [];

      abilityEndpoints.map((endpoint) => {
        return abilityPromises.push(queryApi(endpoint));
      });
      return Promise.all(abilityPromises).then((res) => setAbilityData(res));
    };

    fetchAblities(abilities);
  }, [abilities]);

  console.log(abilityData);

  const abilityRows = abilityData.map((ability, i) => {
    return (
      <TableRow key={ability.name + i}>
        <TableCell>{ability.name}</TableCell>
        <TableCell>{ability.effect_entries[0].effect}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer>
      <Table>
        <TableBody>{abilityRows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default AblitiyTable;
