export class StubbedProcessAlt implements Partial<NodeJS.Process> {
  readonly mockedOutput: string[] = [];

  constructor(private readonly _argv: string[] = []) {}

  get stdout(): any {
    return {
      write: (...args: string[]) => {
        this.mockedOutput.push(...args);
      },
    };
  }

  get argv() {
    return ["node", "app.js", ...this._argv];
  }
}
