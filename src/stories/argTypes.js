import { pokeTypeMap } from "./maps";
import { pokeTypeOptions } from "./options";

export const pokeTypeArg = {
  options: pokeTypeOptions,
  mapping: pokeTypeMap,
  control: { type: "select" },
};
