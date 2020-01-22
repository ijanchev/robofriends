import * as types from "./constants";
import * as actions from "./actions";

describe("setSearchField", () => {
  const text = "test";
  it("should create action to search robots", () => {
    expect(actions.setSearchField(text)).toEqual({
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    });
  });
});

describe("requestRobots", () => {});
