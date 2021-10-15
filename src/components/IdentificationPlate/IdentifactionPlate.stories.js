import React from "react";
import { pokeTypeArg } from "../../stories";
import IdentifactionPlate from "./IdentificationPlate";

export default {
  title: "Design System/Identifaction Plate",
  component: IdentifactionPlate,
  argTypes: {
    id: { control: "number" },
    name: { control: "text" },
    typeX: pokeTypeArg,
    typeY: pokeTypeArg,
  },
};

export const SingleTypePokemon = ({ id, name, typeX }) => {
  return <IdentifactionPlate id={id} name={name} types={[typeX]} />;
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

  return <IdentifactionPlate id={id} name={name} types={types} />;
};

DualTypePokemon.args = {
  id: 1,
  name: "bulbasaur",
  typeX: "Grass",
  typeY: "Poison",
};
