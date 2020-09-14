const findMatching = (drivers, string) => {
  return drivers.filter(
    (driver) => driver.toLowerCase() == string.toLowerCase()
  );
};

const fuzzyMatch = (drivers, string) => {
  return drivers.filter((driver) => driver.slice(0, 2) == string);
};

const matchName = (drivers, string) => {
  return drivers.filter((driver) => driver.name === string);
};
