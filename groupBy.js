const mockData = [
  { make: "tesla", model: "3" },
  { make: "tesla", model: "y" },
  { make: "ford", model: "machee" },
];
const groupBy = (fn, data) => {
  return data.reduce(
    (prev, next) => ({
      ...prev,
      [fn(next)]: [...(prev[fn(next)] || []), next],
    }),
    {}
  );
};
console.log(
  "<<-- groupBy -->",
  groupBy((data) => data.make, mockData)
);
