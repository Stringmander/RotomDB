import { React } from "react";

import AboutAccordian from ".";
import { mockBulbasaur } from "../../stories";
import { useFetch } from "../../util";

export default {
  title: "Design System/About Accordian",
  component: AboutAccordian,
  argTypes: {
    speciesRes: { controls: "object" },
  },
};

export const Primary = () => {
  const speciesRes = useFetch(mockBulbasaur.species.url);

  return <AboutAccordian speciesRes={speciesRes} />;
};

export const Secondary = () => {
  const speciesRes = useFetch("erroneous url");

  return <AboutAccordian speciesRes={speciesRes} />;
};
