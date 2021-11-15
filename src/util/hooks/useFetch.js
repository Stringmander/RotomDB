import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiData(null);
        setIsLoading(true);
        const resp = await fetch(url);
        const data = await resp.json();

        setApiData(data);
        setServerError(null);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setApiData(null);
        setIsLoading(false);
      }
    };

    return url === "" ? null : fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};

export default useFetch;
