import "./findown";

test("findown method should return the value of the first element in the array that satisfies the provided testing function", () => {
  const array1 = [5, 12, 8, 130, 44];

  var found = array1.findOwn(function(element) {
    return element > 10;
  });
  expect(found).toBe(12);
});

test("findown should return undefined if condition is not satisfied", () => {
  const array1 = [5, 12, 8, 130, 44];

  var found = array1.findOwn(function(element) {
    return element > 1000;
  });
  expect(found).toBe(undefined);
});
