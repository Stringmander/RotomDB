import { React } from "react";

import AboutAccordian from ".";
import { mockSpeciesResult } from "../../stories";

export default {
  title: "Design System/About Accordian",
  component: AboutAccordian,
  argTypes: {
    species: { controls: "object" },
  },
};

const AboutAccordianStory = (args) => <AboutAccordian {...args} />;

export const Primary = AboutAccordianStory.bind({});
Primary.args = {
  species: mockSpeciesResult,
};
