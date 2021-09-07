import { createContext } from "react";

const versionGroups = {
  "red-blue": {
    name: "red-blue",
    version: ["red", "blue"],
  },
  yellow: {
    name: "yellow",
    version: ["yellow"],
  },
  "gold-silver": {
    name: "gold-silver",
    version: ["gold", "silver"],
  },
  crystal: {
    name: "crystal",
    version: ["crystal"],
  },
  "ruby-sapphire": {
    name: "ruby-sapphire",
    version: ["ruby", "sapphire"],
  },
  emerald: {
    name: "emerald",
    version: ["emerald"],
  },
  "firered-leafgreen": {
    name: "firered-leafgreen",
    version: ["firered"],
  },
  "diamond-pearl": {
    name: "diamond-pearl",
    version: [],
  },
  platinum: {
    name: "platinum",
    version: ["platinum"],
  },
  "heartgold-soulsilver": {
    name: "heartgold-soulsilver",
    version: ["heartgold", "soulsilver"],
  },
  "black-white": {
    name: "black-white",
    version: ["black", "white"],
  },
  colosseum: {
    name: "colosseum",
    version: ["colosseum"],
  },
  xd: {
    name: "xd",
    version: ["xd"],
  },
  "black-2-white-2": {
    name: "black-2-white-2",
    version: ["black-2", "white-2"],
  },
  "x-y": {
    name: "x-y",
    version: ["x", "y"],
  },
  "omega-ruby-alpha-sapphire": {
    name: "omega-ruby-alpha-sapphire",
    version: ["omega-ruby", "alpha-sapphire"],
  },
  "sun-moon": {
    name: "sun-moon",
    version: ["sun", "moon"],
  },
  "ultra-sun-ultra-moon": {
    name: "ultra-sun-ultra-moon",
    version: ["ultra-sun", "ultra-moon"],
  },
  "lets-go": {
    name: "lets-go",
    version: [],
  },
  "sword-shield": {
    name: "sword-shield",
    version: [],
  },
};

export const VersionGroupContext = createContext(
  versionGroups["ultra-sun-ultra-moon"]
);
