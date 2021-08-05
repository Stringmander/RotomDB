const massageStats = (stats) => {
  const pokeStatName = stats.map(({ stat }) => stat.name);
  const pokeBaseStat = stats.map((stat) => stat.base_stat);

  const pokeStats = Object.fromEntries(
    pokeStatName.map((_, i) => [pokeStatName[i], pokeBaseStat[i]])
  );

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const statTotal = Object.values(pokeStats).reduce(reducer);

  Object.defineProperty(pokeStats, "total", {
    value: statTotal,
    enumerable: true,
  });

  return pokeStats;
};

export default massageStats;
