import "./someown.js";
// The some() method tests whether at least one element in the array passes
// the test implemented by the provided function.
//  It returns a Boolean value.
// Note: This method returns false for any condition put on an empty array.
test("someOwn should test whether at least one element in the array passes", () => {
  const a = [1, 2, 3, 4, 5];
  expect(
    a.someOwn(element => {
      return element % 2 === 0;
    })
  ).toBe(true);
});

test("someOwn should return a Boolean value", () => {
  const a = [1, 2, 3, 4, 5];
  expect(
    typeof a.someOwn(element => {
      return element % 2 === 0;
    })
  ).toBe("boolean");
});

test("someOwn should return true for any condition put on an empty array", () => {
  const a = [];
  expect(
    a.someOwn(value => {
      return value < 40;
    })
  ).toBe(false);
  expect(
    a.someOwn(value => {
      return value > 40;
    })
  ).toBe(false);
});
