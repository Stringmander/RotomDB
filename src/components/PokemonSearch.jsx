import { useState } from "react";
import styled from "styled-components";
import { IconButton , TextField, InputAdornment  } from "@material-ui/core";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const StyledForm = styled.form`
display: "flex";
flex-flow: "row wrap";
align-items: "center";
padding: 4em;
`;

function PokemonSearch(props) {
  const setResult = props.setResult;

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleQuery = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      fetchPokemon();
    }
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

  // const formStyle = {
  //   display: "flex",
  //   flexFlow: "row wrap",
  //   alignItems: "center",
  //   padding: '4em'
  // };

  return (
     
    <div>
        <StyledForm autoComplete="off" onChange={handleChange} onKeyDown={handleQuery} >
          <TextField 
            id="outlined-basic" 
            label="Pokemon" 
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton type="submit" onClick={handleQuery} >
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
