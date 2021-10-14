import { useState } from "react";
import styled from "styled-components";
import { IconButton, TextField, InputAdornment } from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const StyledForm = styled.form``;

function PokemonSearch({ setUrl }) {
  const [searchTerm, setSearchTerm] = useState("");

  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(url);
  };

  return (
    <div className="PokemonSearch">
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Search Pokémon"
          variant="outlined"
          onChange={handleChange}
          margin="normal"
          fullWidth
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
