import { useContext } from "react";
import { languageContext } from "../context/languageContext";

const useLanguageFilter = (arr) => {
  const lang = useContext(languageContext);

  const filteredArr = arr.filter((element) => element.language.name === lang);

  return filteredArr;
};

export default useLanguageFilter;
