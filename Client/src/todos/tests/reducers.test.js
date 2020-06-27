import { expect } from "chai";
import { todos } from "../reducer";

describe("The todo reducer", () => {
  it("adds a new todo when create to do action is received", () => {
    const faketodo = { text: "Hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: { todo: faketodo },
    };
    const originalState = { isLoading: false, data: [] };
    const expected = { isLoading: false, data: [faketodo] };
    const actual = todos(originalState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
