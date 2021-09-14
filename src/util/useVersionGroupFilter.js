import { useContext } from "react";
import { VersionGroupContext } from "../context";
import useLanguageFilter from "./useLanguageFilter";

const useVersionGroupFilter = (arr) => {
  const version = useContext(VersionGroupContext);

  // filters moves based on targetGen
  let filteredArr = arr.filter(({ version_group_details }) => {
    const endpoint = version_group_details.filter(
      (property) => property.version_group.name === version.name
    );
    return endpoint.length > 0;
  });

  // filteredArr = useLanguageFilter(filteredArr);

  return filteredArr;
};

export default useVersionGroupFilter;
