import "./popown";

test("popOwn return the last element from an array", () => {
  const plants = ["broccoli", "tomato"];
  expect(plants.popOwn()).toBe("tomato");
});
test("popOwn removes the last element form an array", () => {
  const plants = ["broccoli", "tomato"];
  plants.popOwn();
  expect(plants).not.toContain("tomato");
});

test("popOwn changes the length of the Array", () => {
  const plants = ["broccoli", "tomato"];
  const l1 = plants.length;
  plants.popOwn();
  const l2 = plants.length;
  expect(l1).not.toBe(l2);
});

test("popOwn should retun undefined if array is empty", () => {
  const a = [];
  expect(a.popOwn()).toBe(undefined);
});
