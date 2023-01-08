export class StubbedProcess implements Partial<NodeJS.Process> {
  constructor(private readonly _argv: string[] = []) {}
  get stdout(): any {
    return {
      write() {},
    };
  }

  get argv() {
    return ["node", "app.js", ...this._argv];
  }
}
