import geolocation from "./geolocation";
test("geolocation", async () => {
  navigator.geolocation = {
    getCurrentPosition(success) {
      success({
        coords: {
          latitude: 0,
          longitude: 0,
          accuracy: 0,
          altitudeAccuracy: 0,
          speed: 0,
          heading: 0
        },
        timestamp: 0
      });
    }
  };

  const result = await geolocation();

  expect(result).toEqual({
    coords: {
      latitude: expect.any(Number),
      longitude: expect.any(Number),
      accuracy: expect.any(Number),
      altitudeAccuracy: expect.any(Number),
      speed: expect.any(Number),
      heading: expect.any(Number)
    },
    timestamp: expect.any(Number)
  });
});
