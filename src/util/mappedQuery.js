import { queryApi } from ".";

export default async function mappedQuery(arr, targetProperty) {
  // array of endpoints that serve move data
  const endpointsArr = arr.map((property) => property[targetProperty].url);

  // array of promises that serve filtered moves data
  const promisesArr = endpointsArr.map((endpoint) => queryApi(endpoint));

  // awaits array of promises, serves moves data from 1st gen to target gen
  const resolvedPromisesArr = await Promise.all(promisesArr);

  return resolvedPromisesArr;
}
