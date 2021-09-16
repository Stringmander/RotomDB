import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const useLanguageFilter = (arr) => {
  const lang = useContext(LanguageContext);

  const filteredArr = arr.filter((element) => element.language.name === lang);

  return filteredArr;
};

export default useLanguageFilter;
