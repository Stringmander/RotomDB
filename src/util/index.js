

export const CapitalCase = (string) =>
[...string].map((char, i) => {
  const isLetter = /^[a-zA-Z]+$/.test(string[i - 1]);
  const parsedChar = !isLetter || i === 0 ? char.toUpperCase() : char;
  return parsedChar;
});
