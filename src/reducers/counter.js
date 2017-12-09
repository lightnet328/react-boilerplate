// @flow
import { handleActions } from "redux-actions";
import Actions from "actions/counter";
import Counter from "models/Counter";

const defaultState: Counter = new Counter();

export default handleActions(
  {
    [Actions.increment]: (state: Counter) => state.increment(),
    [Actions.decrement]: (state: Counter) => state.decrement()
  },
  defaultState
);
