import { queryApi } from ".";

export default async function filterVersion(arr, targetVersionArr) {
  // filters moves based on targetGen
  const filteredArr = arr.filter(({ version }) => {
    const endpoint = version.filter((property) =>
      targetVersionArr.includes(property)
    );
    return endpoint.length > 0;
  });

  // array of endpoints that serve move data
  const endpointsArr = filteredArr.map(({ property }) => property.url);

  // array of promises that serve filtered moves data
  const promisesArr = endpointsArr.map((endpoint) => queryApi(endpoint));

  // awaits array of promises, serves moves data from 1st gen to target gen
  const resolvedPromisesArr = await Promise.all(promisesArr);

  return resolvedPromisesArr;
}
