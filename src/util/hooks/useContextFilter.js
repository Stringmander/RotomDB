import { useContext, useMemo } from "react";
import {
  LanguageContext,
  VersionGroupContext,
  versionGroups,
} from "../../context";

const useContextFilter = (arr) => {
  const lang = useContext(LanguageContext);
  const version = useContext(VersionGroupContext);

  const memoizedArr = useMemo(() => {
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
        version.version.includes(element.version.name)
      ) {
        filteredArr.push(element);
      }
    });

    if (filteredArr.find((element) => element.language)) {
      filteredArr = filteredArr.filter(
        (element) => element.language.name === lang.name
      );
    }

    return filteredArr;
  }, [arr, lang.name, version.id, version.version]);

  return memoizedArr;
};

export default useContextFilter;
