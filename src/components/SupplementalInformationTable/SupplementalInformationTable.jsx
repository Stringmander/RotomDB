import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  OfficialArtwork,
  SupplementalInformationTableWrapper,
  TitleToolbar,
} from ".";
import { LanguageContext } from "../../context";
import SexRatioStatBar from "../SexRatioStatBar";
import { capitalCase, useContextFilter, useMappedFetch } from "../../util";
import PokeballSpinner from "../PokeballSpinner";
import EvolutionTable from "../EvolutionTable";

const SupplementalInformationTable = ({
  setUrl,
  speciesResult,
  id,
  abilities,
}) => {
  const lang = useContext(LanguageContext);
  const { gender_rate, evolution_chain } = speciesResult;

  const { isLoading, apiData, serverError } = useMappedFetch(
    abilities,
    "ability"
  );

  const flavorText = useContextFilter(speciesResult.flavor_text_entries);

  const AbilityTable = () => {
    const typographyVariant = "body2";

    const AbilityCells = () => {
      return apiData.map((ability, i) => {
        const effectText = ability.effect_entries.find(
          ({ language }) => language.name === lang.name
        ).effect;

        return (
          <TableCell key={ability.name} align="center">
            <Tooltip title={effectText}>
              <div>
                <Typography variant={typographyVariant}>
                  {capitalCase(ability.name)}
                </Typography>
                {abilities[i].is_hidden && (
                  <div>
                    <Typography variant={typographyVariant}>
                      (hidden)
                    </Typography>
                  </div>
                )}
              </div>
            </Tooltip>
          </TableCell>
        );
      });
    };

    return (
      <TableContainer>
        <TitleToolbar>
          <Typography variant="h6">Abilities</Typography>
        </TitleToolbar>
        <Table>
          <TableBody>
            <TableRow>
              <AbilityCells />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const FlavorTextTable = () => {
    const typographyVariant = "body2";

    const FlavorTextCells = () => {
      return flavorText.map(({ flavor_text, version, language }, i) => {
        return (
          <TableCell key={`${version.name}-${language.name}`} align="center">
            <Tooltip title={flavor_text}>
              <div>
                <Typography variant={typographyVariant}>
                  {`Pokémon ${capitalCase(version.name)}`}
                </Typography>
              </div>
            </Tooltip>
          </TableCell>
        );
      });
    };

    return (
      <TableContainer>
        <TitleToolbar>
          <Typography variant="h6">Flavor Text</Typography>
        </TitleToolbar>
        <Table>
          <TableBody>
            <TableRow>
              <FlavorTextCells />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <SupplementalInformationTableWrapper>
      <OfficialArtwork
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={"/img/missingno-official.png"}
      />
      <SexRatioStatBar genderRate={gender_rate} />
      {isLoading && <PokeballSpinner />}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : apiData !== null ? (
        <div>
          <EvolutionTable
            setUrl={setUrl}
            evolutionChainUrl={evolution_chain.url}
          />
          <AbilityTable />
          <FlavorTextTable />
        </div>
      ) : (
        <></>
      )}
    </SupplementalInformationTableWrapper>
  );
};

export default SupplementalInformationTable;
