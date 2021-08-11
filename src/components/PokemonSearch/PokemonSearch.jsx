import { useState } from "react";
import styled from "styled-components";
import { IconButton, TextField, InputAdornment } from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { queryApi } from "../../util";

const StyledForm = styled.form``;

function PokemonSearch({ result, setResult }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleQuery = async (e) => {
    e.preventDefault();
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    const data = endpoint !== "" ? await queryApi(endpoint) : result;
    // console.log(data);
    setResult(data);
  };

  return (
    <div className="PokemonSearch">
      <StyledForm autoComplete="off" onSubmit={handleQuery}>
        <TextField
          id="outlined-basic"
          label="Pokemon"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton type="submit">
                  <SearchRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </StyledForm>
    </div>
  );
}

export default PokemonSearch;
