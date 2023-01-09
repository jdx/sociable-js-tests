import { it, expect } from "@jest/globals";
import { rot13 } from "./rot13";

it("rot13", () => {
  expect(rot13("abc123")).toEqual("TUV123");
  expect(rot13("hello")).toEqual("[X__b");
});
