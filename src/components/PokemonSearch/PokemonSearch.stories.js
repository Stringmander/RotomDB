import React from "react";

import PokemonSearch from "./PokemonSearch";

export default {
  title: "Features/PokeSearch",
  component: PokemonSearch,
};

const template = (args) => <PokemonSearch {...args} />;

export const Primary = template.bind({});

Primary.args = {
  setUrl: () => alert("setUrl called"),
};
