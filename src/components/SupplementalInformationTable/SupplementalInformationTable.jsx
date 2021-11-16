import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  OfficialArtwork,
  SupplementalInformationTableWrapper,
  TableHeadCell,
  HeadingToolbar,
  TableBodyCell,
  TooltipTypography,
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
  const {
    gender_rate,
    evolution_chain,
    egg_groups,
    hatch_counter,
  } = speciesResult;

  const { isLoading, apiData, serverError } = useMappedFetch(
    abilities,
    "ability"
  );

  const flavorText = useContextFilter(speciesResult.flavor_text_entries);

  const headingTypographyVariant = "subtitle2";
  const tableCellTypographyVariant = "caption";

  const AbilityTable = () => {
    const AbilityCells = () => {
      return apiData.map((ability, i) => {
        const effectText = ability.effect_entries.find(
          ({ language }) => language.name === lang.name
        ).effect;

        return (
          <TableBodyCell key={ability.name} align="center">
            <Tooltip title={effectText}>
              <div>
                <TooltipTypography variant="body2">
                  {capitalCase(ability.name)}
                </TooltipTypography>
                {abilities[i].is_hidden && (
                  <div>
                    <TooltipTypography variant="body2">
                      (hidden)
                    </TooltipTypography>
                  </div>
                )}
              </div>
            </Tooltip>
          </TableBodyCell>
        );
      });
    };

    return (
      <>
        <HeadingToolbar>
          <Typography variant={headingTypographyVariant}>Abilities</Typography>
        </HeadingToolbar>
        <Table>
          <TableBody>
            <TableRow>
              <AbilityCells />
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  };

  const FlavorTextTable = () => {
    const FlavorTextCells = () => {
      return flavorText.map(({ flavor_text, version, language }, i) => {
        return (
          <TableCell key={`${version.name}-${language.name}`} align="center">
            <Tooltip title={flavor_text} placement="top">
              <div>
                <TooltipTypography variant={headingTypographyVariant}>
                  {`Pokémon ${capitalCase(version.name)}`}
                </TooltipTypography>
              </div>
            </Tooltip>
          </TableCell>
        );
      });
    };

    return (
      <>
        <HeadingToolbar>
          <Typography variant={headingTypographyVariant}>
            Flavor Text
          </Typography>
        </HeadingToolbar>
        <Table>
          <TableBody>
            <TableRow>
              <FlavorTextCells />
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  };

  return (
    <SupplementalInformationTableWrapper>
      <OfficialArtwork
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={"/img/missingno-official.png"}
      />
      {isLoading && <PokeballSpinner />}
      {!isLoading && serverError ? (
        <span>Error in fetching data</span>
      ) : apiData !== null ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell align="center">
                  <Typography variant={headingTypographyVariant}>
                    Sex Ratio
                  </Typography>
                </TableHeadCell>
                <TableHeadCell align="center">
                  <Typography variant={headingTypographyVariant}>
                    Catch Rate
                  </Typography>
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableBodyCell align="center">
                  <SexRatioStatBar genderRate={gender_rate} />
                </TableBodyCell>
                <TableBodyCell align="center">
                  <Typography>{speciesResult.capture_rate}</Typography>
                </TableBodyCell>
              </TableRow>
            </TableBody>
          </Table>
          <AbilityTable />
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell align="center"> Egg Groups </TableHeadCell>
                <TableHeadCell align="center"> Hatch Time </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableBodyCell align="center">
                  {egg_groups.map((eggGroup) => (
                    <div key={eggGroup.name}>
                      <Typography variant={tableCellTypographyVariant}>
                        - {capitalCase(eggGroup.name)}
                      </Typography>
                    </div>
                  ))}
                </TableBodyCell>
                <TableBodyCell align="center">
                  <Typography>{(hatch_counter + 1) * 255} steps</Typography>
                </TableBodyCell>
              </TableRow>
            </TableBody>
          </Table>
          <HeadingToolbar>
            <Typography variant={headingTypographyVariant}>
              Evolution
            </Typography>
          </HeadingToolbar>
          <EvolutionTable
            setUrl={setUrl}
            evolutionChainUrl={evolution_chain.url}
          />
          <FlavorTextTable />
        </TableContainer>
      ) : (
        <></>
      )}
    </SupplementalInformationTableWrapper>
  );
};

export default SupplementalInformationTable;
