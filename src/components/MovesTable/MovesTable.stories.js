import { React } from "react";

import MovesTable from ".";
import { mockPokeResult } from "../../stories";

export default {
  title: "Design System/MovesList",
  component: MovesTable,
  argTypes: {
    moves: {
      controls: "object",
    },
  },
};

const MovesListStory = (args) => <MovesTable {...args} />;

export const Primary = MovesListStory.bind({});
Primary.args = {
  moves: mockPokeResult.moves,
};
