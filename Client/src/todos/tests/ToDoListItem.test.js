import { expect } from "chai";
import { getBorderStyleByDate } from "../ToDoListItem";

describe("getBorderStyleByDate", () => {
  it("returns none if <5", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 3);
    const expected = "none";
    const actual = getBorderStyleByDate(recentDate, today);
    expect(actual).to.equal(expected);
  });
  it("returns border if >5", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 7);
    const expected = "2px solid red";
    const actual = getBorderStyleByDate(recentDate, today);
    expect(actual).to.equal(expected);
  });
});
