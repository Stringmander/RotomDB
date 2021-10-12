export default function massagedPokeTypeNames(types) {
  const pokeTypes = types.map(({ slot, type }, i) => {
    slot = slot + i;
    return type.name;
  });
  return pokeTypes;
}
