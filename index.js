const strIntParser = input => {
  const minusCharCode = 45;
  const numCharCode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  let index = 0;
  if (typeof input === "number") {
    return String(input);
  }
  if (input.length < 1) {
    throw new Error("Unable to parse empty string.");
  }
  if (input.charCodeAt(0) === minusCharCode) {
    index = 1;
  }
  for (let i = index; i < input.length; i++) {
    const isNumerical = numCharCode.includes(input.charCodeAt(i));
    if (!isNumerical) {
      throw new Error("String contains non-numerical characters.");
    }
  }
  return input * 1;
};

module.exports = strIntParser;
