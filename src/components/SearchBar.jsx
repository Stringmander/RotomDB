/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [res, setRes] = useState({});

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
      setRes(response);
    }

    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setRes(data);
    }
  };

  useEffect(() => {}, [res]);

  return (
    <div>
      <input onChange={handleChange} onKeyDown={handleQuery} />
      <button type="submit" onClick={handleQuery}>
        Catch 'em all!
      </button>
      {res.name ? (
        <>
          <p>{res.name}</p>
          <img src={`${res.sprites.front_default}`} alt="pokeman" />
        </>
      ) : res.status === 404 ? (
        <p>No pokemon with that name, try again</p>
      ) : null}
    </div>
  );
}

export default SearchBar;
