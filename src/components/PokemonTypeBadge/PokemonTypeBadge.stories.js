import { React } from "react";

import PokemonTypeBadge from ".";
import { pokeTypeArg } from "../../stories";

export default {
  title: "Design System/PokemonTypeBadge",
  component: PokemonTypeBadge,
  argTypes: {
    type: pokeTypeArg,
  },
};

const PokemonTypeBadgeStory = (args) => <PokemonTypeBadge {...args} />;

export const Primary = PokemonTypeBadgeStory.bind({});
Primary.args = {
  type: "grass",
};
