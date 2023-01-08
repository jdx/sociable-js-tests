import { OutputTracker } from "../util/output_tracker";

export class CommandLine {
  private process: Process;
  private outputTracker = new OutputTracker();

  constructor(p: Process = process) {
    this.process = p;
  }

  args() {
    return this.process.argv.slice(2);
  }

  writeOutput(str: string) {
    this.process.stdout.write(str);
    this.outputTracker.write(str);
  }

  trackOutput() {
    this.outputTracker.start();
    return this.outputTracker;
  }
}

type Process = Pick<NodeJS.Process, "argv" | "stdout">;
