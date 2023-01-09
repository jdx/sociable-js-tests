import { describe, it, expect } from "@jest/globals";
import { CommandLine } from "./command_line";
import { StubbedProcess } from "../test/stubbed_process";
import { inspect } from "util";

describe("argv", () => {
  [[], ["foo"], ["foo", "bar"]].forEach((argv) => {
    it(`has args: ${inspect(argv)}`, () => {
      const sp = new StubbedProcess(argv);
      const cli = new CommandLine(sp);

      expect(cli.args()).toEqual(argv);
    });
  });

  it("tracks output", () => {
    const cli = new CommandLine(new StubbedProcess());
    const track = cli.trackOutput();
    cli.writeOutput("a");
    cli.writeOutput("b");
    cli.writeOutput("c");

    expect(track.output).toEqual("abc");
  });
});
