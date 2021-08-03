import { useState } from "react";
import styled from "styled-components";
import { IconButton, TextField, InputAdornment } from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const StyledForm = styled.form`

`;

function PokemonSearch(props) {
  const setResult = props.setResult;

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleQuery = (e) => {
    e.preventDefault();
    fetchPokemon();
  };

  const fetchPokemon = async () => {
    let response = {};

    if (searchTerm !== "") {
      response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    }

    if (response !== {} && response.status) {
      setResult(response);
    }

    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setResult(data);
    }
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
