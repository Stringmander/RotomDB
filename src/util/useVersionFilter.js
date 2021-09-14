import { useContext } from "react";
import { VersionGroupContext } from "../context";
import useLanguageFilter from "./useLanguageFilter";

const useVersionFilter = (arr) => {
  const version = useContext(VersionGroupContext);

  let filteredArr = [];

  version.version.map((version) => {
    return filteredArr.concat(
      arr.reduce((previousElement, currentElement) => {
        if (currentElement.version.name === version)
          previousElement.push(currentElement);
        return previousElement;
      }, filteredArr)
    );
  });

  filteredArr = useLanguageFilter(filteredArr);

  return filteredArr;
};

export default useVersionFilter;
