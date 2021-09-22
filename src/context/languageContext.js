import { createContext } from "react";

const languages = [
  {
    name: "ja-Hrkt",
    url: "https://pokeapi.co/api/v2/language/1/",
  },
  {
    name: "roomaji",
    url: "https://pokeapi.co/api/v2/language/2/",
  },
  {
    name: "ko",
    url: "https://pokeapi.co/api/v2/language/3/",
  },
  {
    name: "zh-Hant",
    url: "https://pokeapi.co/api/v2/language/4/",
  },
  {
    name: "fr",
    url: "https://pokeapi.co/api/v2/language/5/",
  },
  {
    name: "de",
    url: "https://pokeapi.co/api/v2/language/6/",
  },
  {
    name: "es",
    url: "https://pokeapi.co/api/v2/language/7/",
  },
  {
    name: "it",
    url: "https://pokeapi.co/api/v2/language/8/",
  },
  {
    name: "en",
    url: "https://pokeapi.co/api/v2/language/9/",
  },
  {
    name: "cs",
    url: "https://pokeapi.co/api/v2/language/10/",
  },
  {
    name: "ja",
    url: "https://pokeapi.co/api/v2/language/11/",
  },
  {
    name: "zh-Hans",
    url: "https://pokeapi.co/api/v2/language/12/",
  },
  {
    name: "pt-BR",
    url: "https://pokeapi.co/api/v2/language/13/",
  },
];

const navigatorLang = navigator.language;

const defaultLang = languages.find(({ name }) => navigatorLang.includes(name));

export const LanguageContext = createContext(defaultLang);

export const LanguageContextProvider = ({ children }) => {
  return (
    <LanguageContext.Provider value={defaultLang}>
      {children}
    </LanguageContext.Provider>
  );
};
