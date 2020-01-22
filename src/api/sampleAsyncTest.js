/*
const { getPeople } = require("./script2");
const fetch = require("node-fetch");

describe("Integration Tests - SWAPI", () => {
  it("shoud return 87 people async/await", async () => {
    const data = await getPeople(fetch);
    expect(data.count).toEqual(87);
    expect(data.results.length).toEqual(10);
  });

  it("shoud return 87 people - Promise", async () => {
    expect.assertions(2);
    return getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toEqual(10);
    });
  });

  it("shoud return people", () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            results: [1, 2, 3, 4, 5]
          })
      })
    );
    expect.assertions(2);
    return getPeople(mockFetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toEqual(5);
    });
  });
});

*/
