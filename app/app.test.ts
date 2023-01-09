import { describe, it, expect } from "@jest/globals";
import { App } from "./app";
import { CommandLine } from "../infra/command_line";
import { StubbedProcess } from "../test/stubbed_process";
import { StubbedProcessAlt } from "../test/stubbed_process_alt";
import { rot13 } from "../logic/rot13";

const sharedExamples = (run: (...args: string[]) => string) => {
  it("it fails with no params", () => {
    const output = run();
    expect(output).toEqual("Usage: rot13 <string>\n");
  });

  it("it works", () => {
    const output = run("hello");
    expect(output).toEqual(rot13("hello") + "\n");
  });
};
describe("stubbed process 1", () => {
  sharedExamples((...argv: string[]) => {
    const cli = new CommandLine(new StubbedProcess(argv));
    const tracker = cli.trackOutput();

    const app = new App(cli);
    app.run();

    return tracker.output;
  });
});

describe("stubbed process 2", () => {
  sharedExamples((...argv: string[]) => {
    const process = new StubbedProcessAlt(argv);
    const cli = new CommandLine(process);

    const app = new App(cli);
    app.run();

    return process.mockedOutput.join("");
  });
});
