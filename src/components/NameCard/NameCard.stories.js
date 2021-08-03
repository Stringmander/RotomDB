import React from "react";
import { pokeTypeArg } from "../../stories";

import NameCard from "./NameCard";

export default {
  title: "Design System/NameCard",
  component: NameCard,
  argTypes: {
    id: { control: "number" },
    name: { control: "text" },
    typeX: pokeTypeArg,
    typeY: pokeTypeArg,
  },
};

export const SingleTypePokemon = ({ id, name, typeX }) => {
  return <NameCard id={id} name={name} types={[typeX]} />;
};

SingleTypePokemon.argTypes = {
  typeY: {
    table: {
      disable: true,
    },
  },
};

SingleTypePokemon.args = {
  id: 4,
  name: "charmander",
  typeX: "Fire",
};

export const DualTypePokemon = ({ id, name, typeX, typeY }) => {
  const types = [typeX, typeY];

  return <NameCard id={id} name={name} types={types} />;
};

DualTypePokemon.args = {
  id: 1,
  name: "bulbasaur",
  typeX: "Grass",
  typeY: "Poison",
};
