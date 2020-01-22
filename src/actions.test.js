import * as types from "./constants";
import * as actions from "./actions";
import nock from "nock";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureStore([thunkMiddleware]);

describe("setSearchField", () => {
  const text = "test";
  it("should create action to search robots", () => {
    expect(actions.setSearchField(text)).toEqual({
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    });
  });
});

describe("requestRobots", () => {
  it("handles requesting robots API", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0].type).toEqual(types.REQUEST_ROBOTS_PENDING);
  });
});
