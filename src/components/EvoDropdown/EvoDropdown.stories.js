import { React } from "react";

import EvoDropdown from ".";

export default {
  title: "Design System/",
  component: EvoDropdown,
  argTypes: {
    moves: {
      controls: "object",
    },
  },
};

const EvoDropdownStory = (args) => <EvoDropdown {...args} />;

// export const Primary = EvoDropdownStory.bind({});
// Primary.args = {};
