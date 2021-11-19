import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  OfficialArtwork,
  SupplementalInformationTableWrapper,
  SupplementalHeadingCell,
} from ".";
import SexRatioStatBar from "../SexRatioStatBar";
import { capitalCase, useMappedFetch } from "../../util";
import PokeballSpinner from "../PokeballSpinner";
import EvolutionTable from "../EvolutionTable";
import AbilityTable from "../AbilityTable";
import FlavorTextTable from "../FlavorTextTable";

const SupplementalInformationTable = ({
  setUrl,
  speciesResult,
  id,
  abilities,
}) => {
  const {
    gender_rate,
    evolution_chain,
    egg_groups,
    hatch_counter,
    flavor_text_entries,
  } = speciesResult;

  const { isLoading, apiData, serverError } = useMappedFetch(
    abilities,
    "ability"
  );

  const headingTypographyVariant = "subtitle2";

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
                <SupplementalHeadingCell align="center">
                  <Typography variant={headingTypographyVariant}>
                    Sex Ratio
                  </Typography>
                </SupplementalHeadingCell>
                <SupplementalHeadingCell align="center">
                  <Typography variant={headingTypographyVariant}>
                    Catch Rate
                  </Typography>
                </SupplementalHeadingCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell variant="supplemental-body" align="center">
                  <SexRatioStatBar genderRate={gender_rate} />
                </TableCell>
                <TableCell variant="supplemental-body" align="center">
                  <Typography>{speciesResult.capture_rate}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <AbilityTable apiData={apiData} abilities={abilities} />
          <Table>
            <TableHead>
              <TableRow>
                <SupplementalHeadingCell align="center">
                  {" "}
                  Egg Groups{" "}
                </SupplementalHeadingCell>
                <SupplementalHeadingCell align="center">
                  {" "}
                  Hatch Time{" "}
                </SupplementalHeadingCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell variant="supplemental-body" align="center">
                  {egg_groups.map((eggGroup) => (
                    <div key={eggGroup.name}>
                      <Typography variant="caption">
                        - {capitalCase(eggGroup.name)}
                      </Typography>
                    </div>
                  ))}
                </TableCell>
                <TableCell variant="supplemental-body" align="center">
                  <Typography>{(hatch_counter + 1) * 255} steps</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Toolbar variant="table-heading">
            <Typography variant={headingTypographyVariant}>
              Evolution
            </Typography>
          </Toolbar>
          <EvolutionTable
            setUrl={setUrl}
            evolutionChainUrl={evolution_chain.url}
          />
          <FlavorTextTable flavorTextEntries={flavor_text_entries} />
        </TableContainer>
      ) : (
        <></>
      )}
    </SupplementalInformationTableWrapper>
  );
};

export default SupplementalInformationTable;
