// The application reads a string from the command line, encodes it using ROT-13, and outputs the result.
import {rot13} from "./rot13";
import {CommandLine} from "./infra/command_line";

export class App {
  constructor(private cli = new CommandLine()) {}

  public run() {
    const args = this.cli.args();
    const str = args[0];
    const result = rot13(str);
    this.cli.writeOutput(result + '\n');
  }
}
