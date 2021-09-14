import { createContext } from "react";

const versionGroups = {
  "red-blue": {
    name: "red-blue",
    version: ["red", "blue"],
    id: 1,
  },
  yellow: {
    name: "yellow",
    version: ["yellow"],
    id: 2,
  },
  "gold-silver": {
    name: "gold-silver",
    version: ["gold", "silver"],
    id: 3,
  },
  crystal: {
    name: "crystal",
    version: ["crystal"],
    id: 4,
  },
  "ruby-sapphire": {
    name: "ruby-sapphire",
    version: ["ruby", "sapphire"],
    id: 5,
  },
  emerald: {
    name: "emerald",
    version: ["emerald"],
    id: 6,
  },
  "firered-leafgreen": {
    name: "firered-leafgreen",
    version: ["firered"],
    id: 7,
  },
  "diamond-pearl": {
    name: "diamond-pearl",
    id: 8,
    version: [],
  },
  platinum: {
    name: "platinum",
    version: ["platinum"],
    id: 9,
  },
  "heartgold-soulsilver": {
    name: "heartgold-soulsilver",
    version: ["heartgold", "soulsilver"],
    id: 10,
  },
  "black-white": {
    name: "black-white",
    version: ["black", "white"],
    id: 11,
  },
  colosseum: {
    name: "colosseum",
    version: ["colosseum"],
    id: 12,
  },
  xd: {
    name: "xd",
    version: ["xd"],
    id: 13,
  },
  "black-2-white-2": {
    name: "black-2-white-2",
    version: ["black-2", "white-2"],
    id: 1,
  },
  "x-y": {
    name: "x-y",
    version: ["x", "y"],
    id: 14,
  },
  "omega-ruby-alpha-sapphire": {
    name: "omega-ruby-alpha-sapphire",
    version: ["omega-ruby", "alpha-sapphire"],
    id: 15,
  },
  "sun-moon": {
    name: "sun-moon",
    version: ["sun", "moon"],
    id: 16,
  },
  "ultra-sun-ultra-moon": {
    name: "ultra-sun-ultra-moon",
    version: ["ultra-sun", "ultra-moon"],
    id: 17,
  },
  "lets-go": {
    name: "lets-go",
    version: [],
    id: 18,
  },
  "sword-shield": {
    name: "sword-shield",
    version: [],
    id: 19,
  },
};

export const VersionGroupContext = createContext(versionGroups["x-y"]);
