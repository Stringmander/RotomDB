import { useState } from "react";
import { AppBar, Toolbar, Slide, useScrollTrigger } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledAppBar,
  StyledInputBase,
  StyledToolbar,
} from ".";

function PokemonSearch({ setUrl }) {
  const [searchTerm, setSearchTerm] = useState("");

  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

  const trigger = useScrollTrigger();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(url);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar>
        <StyledToolbar>
          <Search onSubmit={handleSubmit}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for a Pokémon"
              onChange={handleChange}
              value={searchTerm}
            />
          </Search>
        </StyledToolbar>
      </StyledAppBar>
    </Slide>
  );
}

export default PokemonSearch;
