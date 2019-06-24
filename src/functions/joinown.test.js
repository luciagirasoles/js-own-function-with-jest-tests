import "./joinown";

test("joinown should create and return a new string by concatenating all of the elements in an array separated by commas by default", () => {
  const elements = ["Fire", "Air", "Water"];
  expect(elements.joinOwn()).toBe("Fire,Air,Water");
  expect(elements.joinOwn("")).toBe("FireAirWater");
  expect(elements.joinOwn("-")).toBe("Fire-Air-Water");
});

test("If the array has only one item, joinown should return that item without using the separator", () => {
  const elements = ["Fire"];
  expect(elements.joinOwn("-")).toBe("Fire");
});

test("If an element is undefined or null, it is converted to the empty string", () => {
  const elements = [];
  expect(elements.joinOwn()).toBe("");
});
