import React from "react";
import { pokeTypeArg } from "../../stories";

import TeamAvatar from "./TeamAvatar";

export default {
  title: "Design System/TeamAvatar",
  component: TeamAvatar,
  argTypes: {
    id: { control: "number" },
    name: { control: "text" },
    typeX: pokeTypeArg,
    typeY: pokeTypeArg
  },
};

export const SingleTypePokemon = ({ id, name, typeX, setResult }) => {
  return <TeamAvatar id={id} name={name} types={[typeX]} setResult={setResult} />;
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
  typeX: "fire",
  setResult: () => {alert('setResult called')}
};

export const DualTypePokemon = ({ id, name, typeX, typeY, setResult }) => {
  const types = [typeX, typeY];

  return <TeamAvatar id={id} name={name} types={types} setResult={setResult} />;
};

DualTypePokemon.args = {
  id: 1,
  name: "bulbasaur",
  typeX: "grass",
  typeY: "poison",
  setResult: () => {alert('setResult called')}
};
