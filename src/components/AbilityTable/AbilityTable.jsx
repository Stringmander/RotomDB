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

    const languageFilter = (arr, lang) => {
      for (let i = 0; i < arr.length; i++) {
        const ABILITY_LANG = arr[i].language.name;
        const EFFECT_ENTRY = arr[i].effect;
        console.log(`this is written in ${ABILITY_LANG}`);
    
        if (ABILITY_LANG === lang) {
          return EFFECT_ENTRY;
        }
      }
    };

    const effectText = languageFilter(ability.effect_entries, "en")
    
    return (
      <TableRow key={ability.name + i}>
        <TableCell>{ability.name}</TableCell>
        <TableCell>{effectText}</TableCell>
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
