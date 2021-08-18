const queryApi = async (endpoint) => {
  let res = endpoint && endpoint !== "" ? await fetch(endpoint) : {};

  res =
    res.status >= 400 && res.status < 600
      ? // eslint-disable-next-line no-sequences
        (new Error("Bad response from server"), console.log(Error.message))
      : res.status >= 200 && res.status <= 299
      ? await res.json()
      : res;

  return res;
};

export default queryApi;
