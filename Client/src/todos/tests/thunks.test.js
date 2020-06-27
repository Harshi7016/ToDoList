import "node-fetch";
import fetchMock from "fetch-mock";
import { expect } from "chai";
import { loadTodos } from "../thunks";
import sinon from "sinon";

describe("how thunks load to do work", () => {
  it("Dispatch Success Scenario", async () => {
    const fakeDispatch = sinon.spy();
    const fakeTodos = [{ text: "1" }, { text: "2" }];
    fetchMock.get("http://localhost:8080/todos", fakeTodos);
    const expectedFirstAction = { type: "LOAD_TODOS_IN_PROGRESS" };
    const expectedLastAction = {
      type: "LOAD_TODOS_IN_SUCCESS",
      payload: { todos: fakeTodos },
    };
    await loadTodos()(fakeDispatch);
    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedLastAction);
    fetchMock.reset();
  });
});
