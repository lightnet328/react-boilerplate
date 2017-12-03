import { Record } from "immutable";

class Counter extends Record({ counter: 0 }) {
  increment() {
    return this.set("counter", this.counter + 1);
  }

  decrement() {
    return this.set("counter", this.counter - 1);
  }
}

export default Counter;
