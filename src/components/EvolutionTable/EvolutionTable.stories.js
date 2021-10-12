import React from "react";

import EvolutionTable from ".";
import { mockSpeciesResult } from "../../stories";

export default {
  title: "Features/EvolutionTable",
  component: EvolutionTable,
  argTypes: {
    evoChainUrl: { controls: "text" },
  },
};

const EvolutionTableStory = (args) => <EvolutionTable {...args} />;

export const Primary = EvolutionTableStory.bind({});
Primary.args = {
  evoChainUrl: mockSpeciesResult.evolution_chain.url,
};
