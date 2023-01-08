import { App } from "./app";
import { CommandLine } from "../infra/command_line";
import { StubbedProcess } from "../test/stubbed_process";
import { StubbedProcessAlt } from "../test/stubbed_process_alt";
import { rot13 } from "../rot13";
describe('stubbed process 1', () => {
  it("it fails with no params", () => {
    const output = run()
    expect(output).toEqual("Usage: rot13 <string>\n");
  });

  it("it works", () => {
    const output = run("hello")
    expect(output).toEqual(rot13("hello") + "\n");
  });

  function run(...argv: string[]) {
    const cli = new CommandLine(new StubbedProcess(argv));
    const tracker = cli.trackOutput();

    const app = new App(cli);
    app.run()

    return tracker.output;
  }
})

describe('stubbed process 2', () => {
  it("it fails with no params", () => {
    const output = run()
    expect(output).toEqual("Usage: rot13 <string>\n");
  });

  it("it works", () => {
    const output = run("hello")
    expect(output).toEqual(rot13("hello") + "\n");
  });

  function run(...argv: string[]) {
    const process = new StubbedProcessAlt(argv);
    const cli = new CommandLine(process);

    const app = new App(cli);
    app.run()

    return process.mockedOutput.join('');
  }
})
