import { rot13 } from "../rot13";
import { CommandLine } from "../infra/command_line";

export class App {
  constructor(private cli = new CommandLine()) {}

  public run() {
    const args = this.cli.args();
    if (args.length === 0) {
      this.cli.writeOutput("Usage: rot13 <string>\n");
      return;
    }
    const result = rot13(args[0]);
    this.cli.writeOutput(result + "\n");
  }
}
