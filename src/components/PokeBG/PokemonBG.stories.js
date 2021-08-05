import React from "react";
import { pokeTypeArg } from "../../stories";

import PokemonBG from ".";
// import { mockPokeResult } from "../../stories";

export default {
  title: "Features/PokeBG",
  component: PokemonBG
};

const PokemonBGStory = (args) => <PokemonBG {...args} />;

export const SingleTypePokemon = PokemonBGStory.bind({});
SingleTypePokemon.args = {
  types: ["fire"],
  shift: false
};

export const DualTypePokemon = PokemonBGStory.bind({});
DualTypePokemon.args = {
  types: ["grass", "poison"],
  shift: true
};

