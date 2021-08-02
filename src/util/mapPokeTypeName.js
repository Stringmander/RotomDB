export default function mapPokeTypeNames(types) {
  const pokeTypes = types.map(({ type }) => type.name);
  return pokeTypes;
}
