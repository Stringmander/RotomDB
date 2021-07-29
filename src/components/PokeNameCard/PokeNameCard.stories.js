import React from "react";
import { pokeTypeOptions, pokeTypeMap } from "../../stories";

import PokeNameCard from "./PokeNameCard";

const pokeTypeArg = {
  options: pokeTypeOptions,
  mapping: pokeTypeMap,
  control: { type: "select" },
};

export default {
  title: "RotomDB/Atoms/PokeNameCard",
  component: PokeNameCard,
  argTypes: {
    id: { control: "number" },
    name: { control: "text" },
    typeX: pokeTypeArg,
    typeY: pokeTypeArg,
  },
};

const concatPokeTypeArrays = (typeX, typeY) => typeX.concat(typeY);

export const SingleTypePokemon = ({ id, name, typeX }) => {
  return <PokeNameCard id={id} name={name} types={typeX} />;
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
  const types = concatPokeTypeArrays(typeX, typeY);

  return <PokeNameCard id={id} name={name} types={types} />;
};

DualTypePokemon.args = {
  id: 1,
  name: "bulbasaur",
  typeX: "Grass",
  typeY: "Poison",
};
