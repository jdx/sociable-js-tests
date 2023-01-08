export class CommandLine {
  private process: NodeJS.Process;

  constructor(p = process) {
    this.process = p
  }

  args() {
    return this.process.argv.slice(2);
  }

  writeOutput(str: string) {
    this.process.stdout.write(str);
  }
}

class StubbedProcess {

}
