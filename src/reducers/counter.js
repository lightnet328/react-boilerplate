import Actions from "actions/counter";
import { handleActions } from "redux-actions";

const defaultState = { counter: 0 };

export default handleActions(
  {
    [Actions.increment]: state => ({ ...state, counter: state.counter + 1 }),
    [Actions.decrement]: state => ({ ...state, counter: state.counter - 1 })
  },
  defaultState
);
