import React from "react";

import PokemonTeam from "./PokemonTeam.jsx";
import mockTeam from "../../stories";

export default {
  title: "RotomDB/Molecules/PokemonTeam",
  component: PokemonTeam,
  argTypes: {
    team: mockTeam,
  },
};

const PokemonTeamStory = (args) => <PokemonTeam {...args} />;

export const Primary = PokemonTeamStory.bind({});
Primary.args = {
  team: mockTeam,
};
