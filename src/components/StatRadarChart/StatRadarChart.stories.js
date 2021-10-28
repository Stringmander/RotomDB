import React from "react";
import StatRadarChart from ".";

const stats = [
  {
    base_stat: 44,
    effort: 0,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/",
    },
  },
  {
    base_stat: 48,
    effort: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/",
    },
  },
  {
    base_stat: 65,
    effort: 1,
    stat: {
      name: "defense",
      url: "https://pokeapi.co/api/v2/stat/3/",
    },
  },
  {
    base_stat: 50,
    effort: 0,
    stat: {
      name: "special-attack",
      url: "https://pokeapi.co/api/v2/stat/4/",
    },
  },
  {
    base_stat: 64,
    effort: 0,
    stat: {
      name: "special-defense",
      url: "https://pokeapi.co/api/v2/stat/5/",
    },
  },
  {
    base_stat: 43,
    effort: 0,
    stat: {
      name: "speed",
      url: "https://pokeapi.co/api/v2/stat/6/",
    },
  },
];

const type = [
  {
    slot: 1,
    type: {
      name: "water",
      url: "https://pokeapi.co/api/v2/type/11/",
    },
  },
];

export default {
  title: "Design System/StatGraph",
  component: StatRadarChart,
  argTypes: {
    stats: stats,
    types: type,
  },
};

const StatRadarChartStory = (args) => <StatRadarChart {...args} />;

export const Primary = StatRadarChartStory.bind({});
Primary.args = {
  stats: stats,
  types: type,
};
