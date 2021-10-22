import { StatTable } from ".";
import { mockBulbasuar } from "../../stories";

export default {
  title: "Components/StatTable",
  component: StatTable,
};

const StatTableStory = (args) => <StatTable {...args} />;

export const Primary = StatTableStory.bind({});
Primary.args = {
  stats: mockBulbasuar.stats,
};
