// @flow
import Actions from "actions/counter";
import { handleActions } from "redux-actions";
import Counter from "models/Counter";

const defaultState = new Counter();

export default handleActions(
  {
    [Actions.increment]: state => state.increment(),
    [Actions.decrement]: state => state.decrement()
  },
  defaultState
);
