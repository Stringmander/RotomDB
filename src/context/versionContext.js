import { createContext } from "react";

const versionGroups = {
  "red-blue": {
    name: "red-blue",
    versions: ["red", "blue"],
  },
  yellow: {
    name: "yellow",
    versions: ["yellow"],
  },
  "gold-silver": {
    name: "gold-silver",
    versions: ["gold", "silver"],
  },
  crystal: {
    name: "crystal",
    versions: ["crystal"],
  },
  "ruby-sapphire": {
    name: "ruby-sapphire",
    versions: ["ruby", "sapphire"],
  },
  emerald: {
    name: "emerald",
    versions: ["emerald"],
  },
  "firered-leafgreen": {
    name: "firered-leafgreen",
    versions: ["firered"],
  },
  "diamond-pearl": {
    name: "diamond-pearl",
    versions: [],
  },
  platinum: {
    name: "platinum",
    versions: ["platinum"],
  },
  "heartgold-soulsilver": {
    name: "heartgold-soulsilver",
    versions: ["heartgold", "soulsilver"],
  },
  "black-white": {
    name: "black-white",
    versions: ["black", "white"],
  },
  colosseum: {
    name: "colosseum",
    versions: ["colosseum"],
  },
  xd: {
    name: "xd",
    versions: ["xd"],
  },
  "black-2-white-2": {
    name: "black-2-white-2",
    versions: ["black-2", "white-2"],
  },
  "x-y": {
    name: "x-y",
    versions: ["x", "y"],
  },
  "omega-ruby-alpha-sapphire": {
    name: "omega-ruby-alpha-sapphire",
    versions: ["omega-ruby", "alpha-sapphire"],
  },
  "sun-moon": {
    name: "sun-moon",
    versions: ["sun", "moon"],
  },
  "ultra-sun-ultra-moon": {
    name: "ultra-sun-ultra-moon",
    versions: ["ultra-sun", "ultra-moon"],
  },
  "lets-go": {
    name: "lets-go",
    versions: [],
  },
  "sword-shield": {
    name: "sword-shield",
    versions: [],
  },
};

export const VersionGroupContext = createContext(
  versionGroups["ultra-sun-ultra-moon"]
);
