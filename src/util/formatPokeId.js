export default function formatPokeId(id) {
  const parsedId = id.toString().padStart(3, "0");
  return parsedId;
}
