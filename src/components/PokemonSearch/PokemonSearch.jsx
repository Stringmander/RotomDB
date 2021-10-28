import { useState } from "react";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
    <form autoComplete="off" onSubmit={handleSubmit}>
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
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

export default PokemonSearch;
