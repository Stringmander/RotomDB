import { useMemo, useState } from "react";

const useMappedFetch = (arr, key) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useMemo(() => {
    const urlArr = arr.map((element) => element[key].url);
    setIsLoading(true);

    const runAsyncFunctions = () =>
      Promise.all(
        urlArr.map(async (url) => {
          const resp = await fetch(url);
          return await resp.json();
        })
      )
        .then((values) => {
          setApiData(values);
          setIsLoading(false);
        })
        .catch((error) => {
          setServerError(error);
          setIsLoading(false);
        });

    return runAsyncFunctions();
  }, [arr, key]);

  return { isLoading, apiData, serverError };
};

export default useMappedFetch;
