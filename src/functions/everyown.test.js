import "./everyown";

test("everyown should test whether all element in the array pass the test", () => {
  const a = [1, 30, 39, 13];
  expect(
    a.everyOwn(value => {
      return value < 40;
    })
  ).toBe(true);
});

test("everyown should return a Boolean value", () => {
  const a = [1, 30, 39, 13];
  expect(
    typeof a.everyOwn(value => {
      return value < 40;
    })
  ).toBe("boolean");
});

test("everyOwn should return true for any condition put on an empty array", () => {
  const a = [];
  expect(
    a.everyOwn(value => {
      return value < 40;
    })
  ).toBe(true);
  expect(
    a.everyOwn(value => {
      return value > 40;
    })
  ).toBe(true);
});
