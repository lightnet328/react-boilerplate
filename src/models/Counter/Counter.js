// @flow
import { Record } from "immutable";

class Counter extends Record({ counter: 0 })<{ counter: number }> {
  counter: number;

  increment(): Counter {
    return this.set("counter", this.counter + 1);
  }

  decrement(): Counter {
    return this.set("counter", this.counter - 1);
  }
}

export default Counter;
