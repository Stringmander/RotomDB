import React from "react";

import PokeDetails from ".";
import { mockPokeResult } from "../../stories";

export default {
  title: "Features/PokeDetails",
  component: PokeDetails,
  argTypes: {
    result: { controls: "object" },
  },
};

const PokeDetailsStory = (args) => <PokeDetails {...args} />;

export const Primary = PokeDetailsStory.bind({});
Primary.args = {
  result: mockPokeResult,
};
