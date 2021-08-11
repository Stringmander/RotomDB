const queryAPi = async (endpoint) => {
  let res = await fetch(endpoint);

  res =
    res.status >= 400 && res.status < 600
      ? (new Error("Bad response from server"), console.log(Error.message))
      : await res.json();

  return res;
};

export default queryAPi;
