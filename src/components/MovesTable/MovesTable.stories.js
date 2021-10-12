import { React } from "react";

import MovesTable from ".";
import { mockBulbasaur, mockCharmander } from "../../stories";

export default {
  title: "Design System/MovesTable",
  component: MovesTable,
};

const MovesTableStory = (args) => <MovesTable {...args} />;

export const Bulbasaur = MovesTableStory.bind({});
Bulbasaur.args = {
  moves: mockBulbasaur.moves,
  pokeTypes: mockBulbasaur.types,
};

export const Charmander = MovesTableStory.bind({});
Charmander.args = {
  moves: mockCharmander.moves,
  pokeTypes: mockCharmander.types,
};
