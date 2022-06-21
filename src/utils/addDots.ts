export const addDots = (str: string, length: number) => {
  const dots = "...";
  if (str.length > 10) {
    const sliced = str.slice(0, length);
    return sliced + dots;
  } else {
    return str;
  }
};
