import { useContext } from "react";
import {
  LanguageContext,
  VersionGroupContext,
  versionGroups,
} from "../context";

const useContextFilter = (arr) => {
  const lang = useContext(LanguageContext);
  const version = useContext(VersionGroupContext);

  let filteredArr = [];

  arr.forEach((element) => {
    if (element.version_group_details) {
      filteredArr = arr.filter(({ version_group_details }) => {
        const filteredArr = version_group_details.filter(
          (element) =>
            versionGroups[element.version_group.name].id <= version.id
        );
        return filteredArr.length > 0;
      });
    } else if (
      element.version_group &&
      versionGroups[element.version_group.name].id <= version.id
    ) {
      filteredArr.push(element);
    } else if (
      element.version &&
      version.version.includes(element.version.name) &&
      element.language.name === lang.name
    ) {
      filteredArr.push(element);
    }
  });

  return filteredArr;
};

export default useContextFilter;
