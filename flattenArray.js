const array = [1, [2], [3, [4, [5]]], [[[[[[[[6]]]]]]]]];
const flattenArray = (data) => {
  return data.reduce(
    (prev, next) => [
      ...prev,
      ...(Array.isArray(next) ? flattenArray(next) : [next]),
    ],
    []
  );
};
console.log("<<-- flattenArray -->>", flattenArray(array));
