import { expect } from "chai";
import { getCompleteTodos } from "../selectors";

describe("Checking getCompleted todos selector", () => {
  it("Returns completed to do   ", () => {
    const fakeTodos = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
      {
        text: "Say Hello1",
        isCompleted: false,
      },
      {
        text: "Say Hello2",
        isCompleted: false,
      },
    ];
    const expected = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
    ];
    const actualResults = getCompleteTodos.resultFunc(fakeTodos);
    expect(actualResults).to.deep.equal(expected);
  });
});
