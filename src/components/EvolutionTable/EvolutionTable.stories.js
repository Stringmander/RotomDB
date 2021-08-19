import React from "react";

import EvolutionTable from ".";
import { mockSpeciesResult } from "../../stories";

export default {
  title: "Features/EvolutionTable",
  component: EvolutionTable,
  argTypes: {
    speciesData: { controls: "object" },
  },
};

const EvolutionTableStory = (args) => <EvolutionTable {...args} />;

export const Primary = EvolutionTableStory.bind({});
Primary.args = {
  speciesData: mockSpeciesResult,
};
