import { React } from "react";

import MovesTable from ".";
import { mockBulbasaur, mockCharmander, pokeTypeArg } from "../../stories";

export default {
  title: "Design System/MovesTable",
  component: MovesTable,
  argTypes: {
    moves: {
      controls: "object",
    },
    types: {
      controls: "object",
    },
    // typeX: pokeTypeArg,
    // typeY: pokeTypeArg,
  },
};

// export const SingleTypePokemon = ({ moves, typeX }) => {
//   return <MovesTable moves={moves} pokeType={[typeX]} />;
// };

// SingleTypePokemon.argTypes = {
//   typeY: {
//     table: {
//       disable: true,
//     },
//   },
// };

// SingleTypePokemon.args = {
//   moves: mockCharmander.moves,
//   typeX: "Fire",
// };

// export const DualTypePokemon = ({ moves, typeX, typeY }) => {
//   const types = [typeX, typeY];

//   return <MovesTable moves={moves} pokeType={types} />;
// };

// DualTypePokemon.args = {
//   moves: mockBulbasaur.moves,
//   typeX: "Grass",
//   typeY: "Poison",
// };

const MovesTableStory = (args) => <MovesTable {...args} />;

export const Bulbasaur = MovesTableStory.bind({});
Bulbasaur.args = {
  moves: mockBulbasaur.moves,
  pokeTypes: mockBulbasaur.types,
};
