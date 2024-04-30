import { parseUserCsv } from "./utils";
const test = require("node:test");
const assert = require("node:assert");

test("parseUserCsv", () => {
  const csv = `Name,Age
Alice,20
Bob,25
Charlie,30`;
  const users = parseUserCsv(csv);
  assert.deepStrictEqual(users, [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
  ]);
});
