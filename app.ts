// The application reads a string from the command line, encodes it using ROT-13, and outputs the result.
import {rot13} from "./rot13";

export class App {
  public run() {
    const args = process.argv.slice(2);
    const str = args[0];
    const result = rot13(str);
    console.log(result);
  }
}
