export class OutputTracker<T> {
  #output: T[] = [];
  #tracking = false;

  get output() {
    return this.#output.join("");
  }

  start() {
    this.#tracking = true;
  }

  stop() {
    this.#tracking = false;
  }

  write(str: T) {
    if (!this.#tracking) return;
    this.#output.push(str);
  }
}
