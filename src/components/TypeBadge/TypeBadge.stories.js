import { React } from "react";

import TypeBadge from ".";
import { pokeTypeArg } from "../../stories";

export default {
  title: "RotomDB/Design System/TypeBadge",
  component: TypeBadge,
  argTypes: {
    type: pokeTypeArg,
  },
};

const TypeBadgeStory = (args) => <TypeBadge {...args} />;

export const Primary = TypeBadgeStory.bind({});
Primary.args = {
  type: "grass",
};
