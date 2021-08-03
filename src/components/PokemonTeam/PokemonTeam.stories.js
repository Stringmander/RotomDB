import React from "react";

import PokemonTeam from "./PokemonTeam.jsx";
import {mockTeam} from "../../stories";

export default {
  title: "Features/PokeTeam",
  component: PokemonTeam,
  argTypes: {
    team: mockTeam,
  },
};

const PokemonTeamStory = ({team, setResult}) => <PokemonTeam team={team} setResult={setResult} />;

export const Primary = PokemonTeamStory.bind({});
Primary.args = {
  team: mockTeam,
  setResult: () => {alert('setResult called')}
};
