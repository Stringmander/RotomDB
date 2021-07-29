import React from "react";

import PokeNameCard from "./PokeNameCard";

const mockTypes = {
  single: [
    {
      slot: 1,
      type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    },
  ],
  dual: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
};

export default {
  title: "RotomDB/Atoms/PokeNameCard",
  component: PokeNameCard,
  argTypes: {
    id: { control: "number" },
    name: { control: "text" },
    options: [],
  },
};

const PokemonNameCardStory = (args) => <PokeNameCard {...args} />;

export const SingleType = PokemonNameCardStory.bind({});

SingleType.args = {
  id: 4,
  name: "charmander",
  types: mockTypes.single,
};

export const DualType = PokemonNameCardStory.bind({});

DualType.args = {
  id: 1,
  name: "bulbasaur",
  types: mockTypes.dual,
};
