import { queryApi } from ".";

export default async function filterVersionGroup(arr, versionGroup) {
  // filters moves based on targetGen
  const filteredArr = arr.filter(({ version_group_details }) => {
    const endpoint = version_group_details.filter(
      (detail) => detail.version_group.name === versionGroup
    );
    return endpoint.length > 0;
  });

  // array of endpoints that serve move data
  const endpointsArr = filteredArr.map(({ move }) => move.url);

  // array of promises that serve filtered moves data
  const promisesArr = endpointsArr.map((endpoint) => queryApi(endpoint));

  // awaits array of promises, serves moves data from 1st gen to target gen
  const resolvedPromisesArr = await Promise.all(promisesArr);

  return resolvedPromisesArr;
}
